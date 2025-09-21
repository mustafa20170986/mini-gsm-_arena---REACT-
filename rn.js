// phones.js
const phones = [
  // Samsung Flagships
  {
    brand: "Samsung",
    name: "Galaxy S25",
    ram: "12GB",
    rom: "256GB / 512GB",
    image: "https://cdn.mos.cms.futurecdn.net/QRZxiRWrMG2NpMauVPf5aB.jpg",
    chipset: "Exynos 2500 / Snapdragon 8 Gen 4",
    camera: "50MP (wide) + 12MP (ultrawide) + 10MP (telephoto), 12MP front",
    display: "6.2\" Dynamic AMOLED 2X, 120Hz, QHD+",
    price:1200
  },
  {
    brand: "Samsung",
    name: "Galaxy S25+",
    ram: "12GB",
    rom: "256GB / 512GB",
    image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25840140/samsung_galaxy_s25_hands_on_verge_dominic_preston_08.jpg?quality=90&strip=all&crop=0,0,100,100",
    chipset: "Exynos 2500 / Snapdragon 8 Gen 4",
    camera: "50MP (wide) + 12MP (ultrawide) + 10MP (telephoto), 12MP front",
    display: "6.7\" Dynamic AMOLED 2X, 120Hz, QHD+",
    price:1500
  },
  {
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    ram: "12GB / 16GB",
    rom: "256GB / 512GB / 1TB",
    image: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/2025/01/galaxy-s25-ultra-header-1.jpg?w=1600&h=900&fit=crop",
    chipset: "Snapdragon 8 Gen 4 for Galaxy",
    camera: "200MP (wide) + 12MP (ultrawide) + 10MP (3x telephoto) + 50MP (5x telephoto), 12MP front",
    display: "6.8\" Dynamic AMOLED 2X, 120Hz, QHD+",
    price:2500
  },

  // iPhone Flagship
  {
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    ram: "8GB",
    rom: "256GB / 512GB / 1TB",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    chipset: "Apple A18 Pro",
    camera: "48MP (wide) + 12MP (ultrawide) + 12MP (5x telephoto), 12MP front",
    display: "6.9\" LTPO Super Retina XDR OLED, 120Hz",
    price:3000
  },

  // Vivo Flagship
  {
    brand: "Vivo",
    name: "X100 Pro",
    ram: "12GB / 16GB",
    rom: "256GB / 512GB",
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    chipset: "MediaTek Dimensity 9300",
    camera: "50MP (wide) + 50MP (ultrawide) + 50MP (telephoto), 32MP front",
    display: "6.78\" LTPO AMOLED, 120Hz, QHD+",
    price:2500,
  },

  // Oppo Flagship
  {
    brand: "Oppo",
    name: "Find X7 Ultra",
    ram: "12GB / 16GB",
    rom: "256GB / 512GB / 1TB",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg",
    chipset: "Snapdragon 8 Gen 3",
    camera: "50MP (wide) + 50MP (ultrawide) + 50MP (telephoto) + 50MP (periscope), 32MP front",
    display: "6.82\" AMOLED, 120Hz, QHD+",
    price:2300
  },

  // Xiaomi Flagship
  {
    brand: "Xiaomi",
    name: "Xiaomi 14 Ultra",
    ram: "12GB / 16GB",
    rom: "256GB / 512GB / 1TB",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    chipset: "Snapdragon 8 Gen 3",
    camera: "50MP (wide) + 50MP (ultrawide) + 50MP (telephoto) + 50MP (periscope), 32MP front",
    display: "6.73\" LTPO AMOLED, 120Hz, QHD+",
    price:2560
  }
];

import express from "express";
import cors from "cors"

const app = express();
app.use(cors())


app.get("/phones/:brand", (req, res) => {
  const brand = req.params.brand.toLowerCase();
  const result = phones.filter(p => p.brand.toLowerCase() === brand);
  res.json(result);
});
app.get("/phones",(req,res)=>{
  const min=parseInt(req.query.minPrice)||0
  const max =parseInt(req.query.maxPrice)|| Number.MAX_VALUE

    const filter=phones.filter((phone)=>phone.price>=min && phone.price <=max)
    res.json(filter)
})
app.listen(3000, () => console.log("Server running on port 3000"));
