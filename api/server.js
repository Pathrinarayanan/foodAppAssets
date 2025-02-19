const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const baseImgUrl ="https://raw.githubusercontent.com/Pathrinarayanan/foodAppAssets/refs/heads/main/images/";

const foodData = {
    status: "success",
    base_image_url: "https://raw.githubusercontent.com/Pathrinarayanan/foodAppAssets/refs/heads/main/images/",
    data: {
      restaurant: {
        id: 2,
        name: "Spice Hub",
        rating: 4.7,
        cuisine: "Indian",
        image_url: "spice_hub.jpg",
        delivery_time: "25-35 min",
        menu: {
          best_sellers: [
            {
              id: 301,
              name: "Butter Chicken",
              price: 320,
              currency: "INR",
              image_url: "butter_chicken.jpg",
              description: "Rich and creamy butter chicken with Indian spices.",
              is_veg: false
            },
            {
              id: 302,
              name: "Paneer Butter Masala",
              price: 280,
              currency: "INR",
              image_url: "paneer_butter_masala.jpg",
              description: "Soft paneer cubes in a buttery tomato-based gravy.",
              is_veg: true
            },
            {
              id: 303,
              name: "Chicken Biryani",
              price: 350,
              currency: "INR",
              image_url: "chicken_biryani.jpg",
              description: "Aromatic basmati rice cooked with marinated chicken and spices.",
              is_veg: false
            },
            {
              id: 304,
              name: "Dal Makhani",
              price: 240,
              currency: "INR",
              image_url: "dal_makhani.jpg",
              description: "Slow-cooked black lentils in a rich, creamy sauce.",
              is_veg: true
            },
            {
              id: 305,
              name: "Garlic Naan",
              price: 60,
              currency: "INR",
              image_url: "garlic_naan.jpg",
              description: "Soft and fluffy naan topped with garlic butter.",
              is_veg: true
            },
            {
              id: 306,
              name: "Tandoori Chicken",
              price: 400,
              currency: "INR",
              image_url: "tandoori_chicken.jpg",
              description: "Spicy and smoky chicken marinated in yogurt and grilled to perfection.",
              is_veg: false
            },
            {
              id: 307,
              name: "Chole Bhature",
              price: 180,
              currency: "INR",
              image_url: "chole_bhature.jpg",
              description: "Fluffy fried bread served with spicy chickpea curry.",
              is_veg: true
            },
            {
              id: 308,
              name: "Rogan Josh",
              price: 380,
              currency: "INR",
              image_url: "rogan_josh.jpg",
              description: "A flavorful Kashmiri mutton curry cooked with rich spices.",
              is_veg: false
            }
          ],
          recommended: [
            {
              id: 401,
              name: "Malai Kofta",
              price: 290,
              currency: "INR",
              image_url: "malai_kofta.jpg",
              description: "Deep-fried paneer and potato balls in a creamy sauce.",
              is_veg: true
            },
            {
              id: 402,
              name: "Mutton Biryani",
              price: 380,
              currency: "INR",
              image_url: "mutton_biryani.jpg",
              description: "Fragrant rice layered with tender mutton and saffron.",
              is_veg: false
            },
            {
              id: 403,
              name: "Palak Paneer",
              price: 260,
              currency: "INR",
              image_url: "palak_paneer.jpg",
              description: "Soft paneer cubes cooked in a rich spinach gravy.",
              is_veg: true
            },
            {
              id: 404,
              name: "Veg Pulao",
              price: 220,
              currency: "INR",
              image_url: "veg_pulao.jpg",
              description: "Basmati rice cooked with aromatic spices and mixed vegetables.",
              is_veg: true
            },
            {
              id: 405,
              name: "Lassi",
              price: 90,
              currency: "INR",
              image_url: "lassi.jpg",
              description: "Thick and creamy yogurt-based drink, sweet or salty.",
              is_veg: true
            },
            {
              id: 406,
              name: "Keema Naan",
              price: 160,
              currency: "INR",
              image_url: "keema_naan.jpg",
              description: "Stuffed naan bread with spiced minced lamb filling.",
              is_veg: false
            },
            {
              id: 407,
              name: "Pani Puri",
              price: 80,
              currency: "INR",
              image_url: "pani_puri.jpg",
              description: "Crispy puris filled with spiced water and mashed potatoes.",
              is_veg: true
            },
            {
              id: 408,
              name: "Gulab Jamun",
              price: 120,
              currency: "INR",
              image_url: "gulab_jamun.jpg",
              description: "Soft, spongy milk dumplings soaked in sugar syrup.",
              is_veg: true
            }
          ],
          advertise: [
            {
              id: 501,
              name: "Masala Dosa",
              tagline: "Crispy dosa with spicy potato filling",
              image_url: "masala_dosa.jpg",
              offer: "Flat 20% Off"
            },
            {
              id: 502,
              name: "Hyderabadi Biryani",
              tagline: "Authentic Dum Biryani with rich flavors",
              image_url: "hyderabadi_biryani.jpg",
              offer: "Buy 1 Get 1 Free"
            },
            {
              id: 503,
              name: "Tandoori Chicken",
              tagline: "Juicy, spicy, and smoky grilled chicken",
              image_url: "tandoori_advertise.jpg",
              offer: "10% Off on Large"
            },
            {
              id: 504,
              name: "Gulab Jamun",
              tagline: "Soft and syrupy dessert delight",
              image_url: "gulab_jamun.jpg",
              offer: "Free with Orders Above ₹500"
            }
          ]
        }
      }
    }
  };
  
  app.get('/', (req, res)=>{
    res.send("welcome to food delivery")
  })

  app.get('/menu', (req, res)=>{
    res.json(foodData)
  })

  const port = process.env.PORT || 3000

  app.listen(port,() =>{
    console.log("running...")
  })