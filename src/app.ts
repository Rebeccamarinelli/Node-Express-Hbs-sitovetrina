import express, {NextFunction, Request, Response} from 'express';
import { DateTime } from 'luxon';
import {data} from './data/data';


const port = 3000;
const app = express();

app.set("views", "./src/templates");
app.set("view engine", "hbs");

app.use(( req:Request, res:Response, next: NextFunction )=>{
   console.log(`LOG:`, req.method, req.url, DateTime.local().toFormat("dd/MM/yyyy HH:mm:ss"));
   console.log(`User-Agent: ${req.headers['user-agent']}`);
   next();
})

app.use(express.static('./css'))


app.get('/', ( req:Request, res:Response )=>{
    res.render("index", {prodotti:data})
})

app.get('/prodotti/:id', ( req:Request, res:Response )=>{
    const id = req.params["id"];
    const idNumber = Number(id);

    const prodotto = data.find(prodotto => prodotto.id == idNumber)

    if(!prodotto){
        res.status(404).send('articolo non trovato');
        return;
    }

    res.render("prodotto", {prodotto: prodotto})
})

app.get('/api/prodotti', ( req:Request, res:Response )=>{
    res.json(data)
})

app.get('/api/prodotti/:id', ( req:Request, res:Response )=>{
    const id = req.params["id"];
    const idNumber = Number(id);

    const prodotto = data.find(prodotto => prodotto.id == idNumber)

    if(!prodotto){
        res.status(404).send('articolo non presente nell API');
        return;
    }

    res.json(prodotto)
})

 app.use(( req:Request, res:Response)=>{
     res.status(404).send('pagina non trovata')
 })

 app.use((err:Error, req:Request, res:Response, next:NextFunction )=>{
    res.status(500).send('Ops qualcosa è andato storto' + err.message)
})



app.listen(port, ()=>{
    console.log(`Server in esecuzione su http://localhost:${port} `);
    console.log(`Premete CTL + C per arrestare`);
})