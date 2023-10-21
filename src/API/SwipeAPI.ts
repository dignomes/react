import { Stock } from '../types';

export const getStocks = async () => {
    // const response = await axiosInstance.get('/stocks');
    // return response.data;
    const st: Stock[] = [
      {
        id: 1,
        stock: "stock.Reaction.None",
        title: "Aeonus",
        description: "Aeonus is a carbon neutral startup company that offers eco-friendly power source to replace diesel generators.",
        tags: "['energy-0ff0', 'environmental-engineering-5941', 'greentech', 'renewable-energy']",
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/egglr7lv1lbtpioxyxpu.jpg"
      },
      {
        id: 2,
        stock: "stock.Reaction.None",
        title: "AirForestry",
        description: "#Re-inventing Forestry. We are building the forestry of the future, from above with drones.",
        tags: "['drones', 'environmental-engineering-5941', 'forestry-9c5d', 'greentech', 'sustainability-e391']",
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/plqwvnaet1ox41pxfytu.jpg"
      },
      {
        id: 3,
        stock: "stock.Reaction.None",
        title: "AlphaEdge",
        description: "Gridustry is an information technology company that empowers the transition to green energy through digital solutions.",
        tags: "['big-data', 'greentech', 'information-technology-dbca', 'renewable-energy']",
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/kbqhk1f437efkvevn5re.jpg"
      },
      {
        id: 4,
        stock: "stock.Reaction.None",
        title: "Altruistiq",
        description: "Gurus Solutions is a 9 year 5-star NetSuite ERP & Dell Boomi partner with 15 of experience working to scale up businesses with Cloud tech.",
        tags: "['cleantech', 'greentech', 'software', 'sustainability-e391']",
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zty2zold6nqyhsyj9xws.jpg"
      },
      {
        id: 5,
        stock: "stock.Reaction.None",
        title: "American Express",
        description: "UBS is a global financial services company that engages in the provision of financial management solutions.",
        tags: "['finance', 'financial-services', 'payments']",
        image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/bi0hxxjotj6herwrcgdb.jpg"
      }
    ];

    return st;
}

export const getStock = async () => {
    // const response = await axiosInstance.get('/stock');
    // return response.data;
    const st: Stock = {
      id: 6,
      stock: "stock.Reaction.None",
      title: "Andes - Crunchbase Investor Profile & Investments",
      description: "Andes develops an integrated microbial technology to help accelerate crop growth.",
      tags: "['agriculture', 'agtech', 'biotechnology', 'greentech', 'sustainability-e391']",
      image_url: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/u7utfet2oqdglu5mjrge.jpg"
    };

    return st;
}

export const likeStock = async (id: number) => {
    // const response = await axiosInstance.post('/like', {ticker});
    // return response.data;
    
    console.log("I like it: " + id);
}

export const dislikeStock = async (id: number) => {
    // const response = await axiosInstance.post('/dislike', {ticker});
    // return response.data;
    
    console.log("I dislike it: " + id);
}