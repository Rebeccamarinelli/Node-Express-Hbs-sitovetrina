import { IProdotto } from "../models/prodotto";

export const data:IProdotto[] =[
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "data:image/jpeg;base64,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",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "data:image/jpeg;base64,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",
        images: [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://www.tecnosell.com/media/catalog/product/cache/dc9ef63791129c4f1f95b5ecbb3d88d1/g/r/grey_1.jpg",
        images: [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://imei.org/storage/files/images/6343/preview/oppo-f19-1.png",
        images: [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        id: 5,
        title: "Huawei P30",
        description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://cdn.idealo.com/folder/Product/6466/8/6466890/s10_produktbild_max/huawei-p30.jpg",
        images: [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    },
    {
        id: 6,
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://m.media-amazon.com/images/I/71nM55mRvxL.jpg",
        images: [
            "https://i.dummyjson.com/data/products/6/1.png",
            "https://i.dummyjson.com/data/products/6/2.jpg",
            "https://i.dummyjson.com/data/products/6/3.png",
            "https://i.dummyjson.com/data/products/6/4.jpg"
        ]
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://images.samsung.com/is/image/samsung/it-feature-move-in-the-aura-254845057?$FB_TYPE_A_MO_JPG$",
        images: [
            "https://i.dummyjson.com/data/products/7/1.jpg",
            "https://i.dummyjson.com/data/products/7/2.jpg",
            "https://i.dummyjson.com/data/products/7/3.jpg",
            "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        ]
    },
    {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSh6y0jyS_r1V7F50YcBp_JSb-5GIY5somg&s",
        images: [
            "https://i.dummyjson.com/data/products/8/1.jpg",
            "https://i.dummyjson.com/data/products/8/2.jpg",
            "https://i.dummyjson.com/data/products/8/3.jpg",
            "https://i.dummyjson.com/data/products/8/4.jpg",
            "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        ]
    },
    {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8Mj-vhqy_Sl14FV5q_YRl13hNh1LPsW1hg&s",
        images: [
            "https://i.dummyjson.com/data/products/9/1.jpg",
            "https://i.dummyjson.com/data/products/9/2.png",
            "https://i.dummyjson.com/data/products/9/3.png",
            "https://i.dummyjson.com/data/products/9/4.jpg",
            "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        ]
    },
    {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "data:image/jpeg;base64,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",
        images: [
            "https://i.dummyjson.com/data/products/10/1.jpg",
            "https://i.dummyjson.com/data/products/10/2.jpg",
            "https://i.dummyjson.com/data/products/10/3.jpg",
            "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        ]
    }
];