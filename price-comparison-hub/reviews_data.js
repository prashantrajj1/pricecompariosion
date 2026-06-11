// Real-time scraped customer reviews database from Flipkart
const REVIEWS_DATA = {
  "samsung-s25-fe": [
    {
      "author": "Shivakumar D",
      "rating": 5,
      "title": "Just wow!",
      "text": "The phone offers exceptional performance.\nThe camera's capabilities are impressive.\nThe user interface is highly intuitive.\nIt is exceptionally user-friendly.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_93d7e68ebfe5424a8ebb7a08742206e7.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3e7c526607af40bbaac9ec1eb89d90bb.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_143efe6e61b54d168ba1b221b282d97c.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0fa5a216eb244a92a3d9c744e69db383.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Wonderful",
      "text": "Just wow🤩🤩",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ea0158ce6e544d19916852c2ef0081e9.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4a274368152e4483b264aa87ddea8e77.jpg?q=80"
      ]
    },
    {
      "author": "Rahul Chaudhary",
      "rating": 5,
      "title": "Fabulous!",
      "text": "Osm Camera and Performance Good Samsung S24 Snapdragon 8 Gen 3 😍",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a09a5bfa41f74c68831af8cef401831b.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_34436b513ebd474fa7efe4821b8766a8.jpg?q=80"
      ]
    },
    {
      "author": "Saheb Bhalkundi",
      "rating": 5,
      "title": "Brilliant",
      "text": "Superb.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c2f2b13846a04a7396c3862bdf4f38df.jpg?q=80"
      ]
    },
    {
      "author": "BIKASH  CHETIA",
      "rating": 5,
      "title": "Excellent",
      "text": "Camera is the main reason for my buying.\nThere is a heating issue.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2b5400f803074bc789cd958ca36fda67.jpg?q=80"
      ]
    },
    {
      "author": "Amit Kumar  Behera",
      "rating": 5,
      "title": "Mind-blowing purchase",
      "text": "Powerful performance, excellent display,compact size and amazing camera making it an allrounder phone. The only drawback is battery life.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_749d286912684a50b7f97c2ee7d6d42f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e8df5f3d821747e69690eca6c06f55d8.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_70c4058202ab4f2ca59e8099796a7c36.jpg?q=80"
      ]
    },
    {
      "author": "Raja",
      "rating": 5,
      "title": "Excellent",
      "text": "Just looking like a wow",
      "images": []
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "Camera is just wow looking it everything is best but the battery is the real problem of this problem",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_640638aa71304d7986e711e884bba2a6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9ad34b74cbc94986a8b72f85bbb04202.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c4ccd2192d21415ebbe2aa5ed8ac244a.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 4,
      "title": "Value-for-money",
      "text": "It's camera, galaxy AI features,circle to search,high peak brightness, telephoto camera,more customization options, display,samsung inbuit apps,privacy features, sound quality i could say I'm obsessed with samsung.. i wanted to buy i phone but i don't know why i bought this...and i can say this is the best and worthy decision i've made so far...",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_94a78bd7c88f419e86ee6c248896969f.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Awesome",
      "text": "Perfect 👌",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6cd0fe42679b459c9319c41fb9b9fcce.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2edf22cf368e4f7f914c8690e36f4ff3.jpg?q=80"
      ]
    }
  ],
  "iphone-16-pro": [
    {
      "author": "Sourish Dinda",
      "rating": 5,
      "title": "Great product",
      "text": "Upgraded from Iphone 13, immaculate performance experience as of now. Loving every bit of it. Battery life is decent, otherwise great device.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_20d01a9c5b9c4858a355687faec823ba.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f7171a39e3b149e5a43a8444da4ef2df.jpeg?q=80"
      ]
    },
    {
      "author": "Kapil Chaudhary",
      "rating": 5,
      "title": "Fabulous!",
      "text": "Best camera phone",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_fb709ea999964067a014b8cffaed7aa2.jpeg?q=80"
      ]
    },
    {
      "author": "Pavan Gurjar",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Everything is Perfect But Ios 26 Ruined Everything 👀",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a6a3eed777e14403be44d89aa72f4932.jpeg?q=80"
      ]
    },
    {
      "author": "Abhi Ghejji",
      "rating": 5,
      "title": "Simply awesome",
      "text": "Love it 16 Pro",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9cf545292eea4ddebbef48e51a5923b0.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7877ace8d4284d1d9f1d5c0f8a3302e1.jpeg?q=80"
      ]
    },
    {
      "author": "Suraj Kumar chourasia",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "I m satisfied very nice look and camera is excellent😍",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ab5aaa6d50e94f5e9cff1c083d726b3a.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f1e872e31a3b42bb9c09310f3dd56755.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_341d000067a549019efa748cf9fb87e6.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2ef0a4ec5ba74c2b804c50a75d4b70ad.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d59d94bd404747159dbde4e0a266c3bf.jpeg?q=80"
      ]
    },
    {
      "author": "Shilpa Dutta",
      "rating": 5,
      "title": "Super!",
      "text": "Love it",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7f471c7464ed4a1aa7c723a59c5a9427.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ebac97ad34a747018b6331997ac728ea.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_dc93e601241d451b84fbfdb749441af3.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4676b677f6e54f74906894a94555014d.jpeg?q=80"
      ]
    },
    {
      "author": "Sakshi Raj",
      "rating": 5,
      "title": "Excellent",
      "text": "Really this iPhone is very good with this price",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_94d052f24fc44d58be6d9939c2b3ede9.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c2ee01b0df24488a9d68b278692d1ef6.jpeg?q=80"
      ]
    },
    {
      "author": "Rohit Sain",
      "rating": 5,
      "title": "Excellent",
      "text": "Very Good",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a04a6e39d3454bfb9a2be033a17ec918.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_94cb101a9c3b4c2fa30aada8289ae16c.jpg?q=80"
      ]
    },
    {
      "author": "Shobhan Raj",
      "rating": 5,
      "title": "Brilliant",
      "text": "Best iPhone ever  thanks Flipkart for delivering in just 2 days.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6be7b6685ee54c44b203d0a3e04fee2b.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3b8046e7c03d49f8bad6479b6ad58b33.jpeg?q=80"
      ]
    },
    {
      "author": "Akshay  Tyagi",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Nice Product... \nLoved It..",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9586ae3c013c4063be5b12831ffd23de.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_bf4d6d42244b463687cadb35b727e883.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e4a0cc700eb8420aa71b009c28788553.jpg?q=80"
      ]
    }
  ],
  "iphone-15-pro": [
    {
      "author": "Prabhash Yadav",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Too good",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_946da272217b432483291204af77fc0b.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c3c3c7f290ef40b5af232c06becbb8f0.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c464f6291ab3406e8927b95ad9641a88.jpeg?q=80"
      ]
    },
    {
      "author": "Mohit Goswami",
      "rating": 5,
      "title": "Terrific",
      "text": "White color love ❤️\n\nUpgrading from iPhone 14\nI love this product.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_8e47732d0f5646e99ab25faa5406d7c0.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d5aee3c6d0d74ddc8177b38e7964b825.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_674baa60db804f45992ead5288b767f5.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3951229fc0e543098cbcadc946965ed0.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a7ea661e56fc4738a2f708ca985e8701.jpeg?q=80"
      ]
    },
    {
      "author": "SANVAD PANPATTE PATIL",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "Superb performance \nthnx Flipkart for best purchase experience ever geniun product",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d810f784d05d49fcb5300de63530ebbf.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9b66ca70157c46938f8f1df403f2d395.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_44dd13428db247f4b4a853f12f8a40cb.jpeg?q=80"
      ]
    },
    {
      "author": "Dr priyanka L priyanka",
      "rating": 5,
      "title": "Fabulous!",
      "text": "Extremely Happy with my 15pro mobile,,😊thanq seller n Flipkart for the fast delivery",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_5e2d50eef7074612944eb192c618da50.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f51e3884e9bb477293bf8cbdf6e16366.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_145597ac35044cf4b370de7ddaecfda0.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f3f712cb49ae4d97b2e47a81e9767610.jpg?q=80"
      ]
    },
    {
      "author": "VISHAL KUMAR",
      "rating": 5,
      "title": "Must buy!",
      "text": "Superb quality. so smooth and excellent performance.\nLight weight.\nExcellent camera quality.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a42a6f4ff8bb4b818c6e536b763d57c7.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c0bb49d1b396428792e81121acc8e689.jpeg?q=80"
      ]
    },
    {
      "author": "Fardeen Mansuri",
      "rating": 5,
      "title": "Super!",
      "text": "Best performance ultimate camera and display 👌",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4459747de132437c9649a506abf49ec4.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ce17ce33a4e842a7a7f44efe094899bc.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_54e8c5e9a59044748c3799bb705805f5.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9aa98e0232e446e09f09a93f2f355b85.jpeg?q=80"
      ]
    },
    {
      "author": "Vibha  Kumari",
      "rating": 5,
      "title": "Awesome",
      "text": "Mind blowing experience with this phone. Beast processor. No heating issue and ultimate camera. All the above the best part is the color.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_598c57c5f1ed49f1aae251de69777b9d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_75c648cffb0748c9b2d1f9726e88016e.jpg?q=80"
      ]
    },
    {
      "author": "PRASHANT ANSURYA",
      "rating": 5,
      "title": "Highly recommended",
      "text": "Awesome Camra",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e475de80a5aa414d9d6b64bffca661b2.jpeg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Classy product",
      "text": "Awesome.. Go for it😍",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d43af1cd60e04574b3048ea2fe5288cd.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f0e176ea77374c3b9ca36f530b293a8e.jpg?q=80"
      ]
    },
    {
      "author": "Nafeesa Khan",
      "rating": 5,
      "title": "Simply awesome",
      "text": "Great phone, not that exciting design wise but excellent iOS experience.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ade5f09cd22145f69e4cef536f1551df.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e17ad6a3103b4993ae93ac55b9b1296b.jpg?q=80"
      ]
    }
  ],
  "samsung-s24-ultra": [
    {
      "author": "Narendra  Singh",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "Amazing Products 👏 🤩",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_92e81842cfcf4f73944bf187a9bc4449.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1e2011bab61147deb1f6b70507370810.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_01c5972c789c4d7a8f45b89c8dffcac5.jpg?q=80"
      ]
    },
    {
      "author": "himanshu mehta",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Best in night photography",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ec0262310586496eab7b5ccda92ad7e4.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_28628ccda4bb4b4981f170c58797667f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e7cc6642de644ed8bf6952f9bc5e8ae5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_074b9ade33d94824a7ceb0e65e8c33e1.jpg?q=80"
      ]
    },
    {
      "author": "Rajesh Meena",
      "rating": 5,
      "title": "Must buy!",
      "text": "Android King 🤴\nAll-rounder phone 📱 \nAll in one 💯🎊",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9aee739f8e6c43b8b3e31028d5cb4940.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3e40ae54cc5648c8bf85b46bd1cbb94d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_170209814b6a4afcace6bdb354a707d5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1b874b7bb3f24bdcb1c94b56a2bdb02e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0235692f9c754407a629e845202a17b4.jpg?q=80"
      ]
    },
    {
      "author": "ROHITH CHINTA",
      "rating": 5,
      "title": "Super!",
      "text": "Best mobile for photography\nCharging wise also good\nNo issues at all.\nGiving my review after using it almost 50 days.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_b957245a4e5e4c7e8b75313fccbfaa32.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_80a8892415aa4a7783f1b8c10672839d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_5f3c58f59b8c40f3beda9d08f1b8528b.jpg?q=80"
      ]
    },
    {
      "author": "Rahul  T",
      "rating": 5,
      "title": "Excellent",
      "text": "Excellent",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ce0a32c2eba84f03a8775a02c3f2e34f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7412c705b5bd48d2ab3c58de2369df02.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_67816dfc28664326b38f0da4cef7e392.jpg?q=80"
      ]
    },
    {
      "author": "Amit Kottawar",
      "rating": 5,
      "title": "Classy product",
      "text": "Superb product great in every aspect. Go for it",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4636b1b546f54fc8a670af38be17a88f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1ef46b0791c141a4a0ae3bd5909eb0c7.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_63750e9af316415f8e467bf5367fd630.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_23374e859ab344729fc91b6a573896ce.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_72eea1ec1d77479d863fc451f4657da4.jpg?q=80"
      ]
    },
    {
      "author": "Amol Mahind",
      "rating": 5,
      "title": "Awesome",
      "text": "Awesome Display and Camera.\nBattery performance is also good.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_45e9eb8aef8f4f5faffdd6a1c3607f2b.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_667cf1b41b7a42a0a2d448cb5fd07702.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6731defcdd1c4270a089993caa332ec6.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "What a fantastic mobile it is. Camera is the best, performance is the best,  look and feel is very rich. Display is Ultra HD. The best of best.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f0399ca7e7654b45afaf8885c7880a5e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a28a51681eea474fbf42ad8ffc1c9f87.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_702132399fce4160af72ac8a811f37d1.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_aa7864e8ab934ffd8a87678dac723d9d.jpg?q=80"
      ]
    },
    {
      "author": "Harshal Chaudhari",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Loved it",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_670e47fb459b4e909eb1f573dfd070c5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1847bc458c584b80b985111f14d54b67.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_41185b4ac5aa4e4db8ce127e34d306c6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9e3729f23d664816a6557e230765ea90.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_113596718e794e2b92c6b17ba14e35bd.jpg?q=80"
      ]
    },
    {
      "author": "narendra goswami",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Nice performance of camera and other features..\nSamsung always great..,",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3c4605eefa9a4be4b896090ac3ce8dcd.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f3b3b38666e048218ca9834f60fcc15e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c0178db4daf3442f8d0b0c95545ce3d0.jpg?q=80"
      ]
    }
  ],
  "oneplus-12": [
    {
      "author": "Santanu  Bhunia",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Awesome",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2763fe4d96df454b8f1836a17adef01d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_995a02ce20e348b0910a071275ce897f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f95168f1ae1546959964c4cf4936d7fc.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0f2798a7aacf4def9d66da41aab9b39f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a8d6f13fab8348dcb20461d7f25369da.jpg?q=80"
      ]
    },
    {
      "author": "Nantha Kumar",
      "rating": 5,
      "title": "Terrific",
      "text": "2 day using review.\n\nCamera was awesome. Mind blowing portrait pictures. Night mode was natural. I'm using normal usage for 2 days. Still battery 23% left. Worth battery capacity. Call quality excellent. Dolby Atmos audio decent. Still I'm not playing games. Just small review for using this phone. Thanks Flipkart for good packaging.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_955630b2bfe249a498d2cee5a45efb34.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4e154f0618424083a85de75f925f61ff.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_63ed994f89c44b87a0ea38e178dafa79.jpg?q=80"
      ]
    },
    {
      "author": "Krishna Sawant",
      "rating": 5,
      "title": "Worth every penny",
      "text": "If you are going for S24 don't buy try OP12 this is tooo better than s",
      "images": []
    },
    {
      "author": "Alok Tiware",
      "rating": 5,
      "title": "Highly recommended",
      "text": "HD High Camera Quality 🥳🥳🥳",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d3bba88c45f64eb8b58dc937d45dd486.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e73e4266a27f461ab0b68c4744277657.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9c09ad8eee6d4693b937c8537ef529b3.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0a198ec7141543558fc90932a3d66c63.jpg?q=80"
      ]
    },
    {
      "author": "Chandan Swain",
      "rating": 4,
      "title": "Good quality product",
      "text": "Awesome",
      "images": []
    },
    {
      "author": "Pavithran",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Camera is fantastic\nBattery is powerful\nPerformance is best\nAll the features are good,\nMobile is rocking,\nThanks flipkart",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_78f792e953a24cef98a884ac283b7e0d.jpg?q=80"
      ]
    },
    {
      "author": "MARUFA BIBI MALLICK",
      "rating": 5,
      "title": "Just wow!",
      "text": "Great product",
      "images": []
    },
    {
      "author": "Dr.Akash Das Adhikary",
      "rating": 5,
      "title": "Great product",
      "text": "One of the best device, don't read the negative reviews,it's a gem of a phone.just go for it.Best flagship device of this year.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e0f7cb75e868457abac0ff432627d0d1.jpg?q=80"
      ]
    },
    {
      "author": "Anmol Chaurasia",
      "rating": 5,
      "title": "Super!",
      "text": "Buy in 2026, 2 years after launch. \nReason: Best value for money. \nYou get an awesome display, decent camera, very good battery life ( runs a day easily on moderate uses), and a very smooth UI, charged to full in about 20 mins. The curved display is a plus point for me (the phone seems smaller and gesture navigation works very well).\nThe down point: will get another 3 years of update and if lucky... One more year of updates. But thats enough for me.",
      "images": []
    },
    {
      "author": "VASANTKUMAR  BHOVI",
      "rating": 5,
      "title": "Excellent",
      "text": "Good.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_74bb6da02c8c43ab8643137f7b096694.jpg?q=80"
      ]
    }
  ],
  "pixel-8-pro": [
    {
      "author": "Mohit  Panchal",
      "rating": 5,
      "title": "Classy product",
      "text": "Google fan since Nexus 5X\n\nSince then \nPixel 2 Xl\nPixel 4a\nPixel 6 and now\nPixel 8 Pro \nAnd never thought once to switch to another manufacturer.",
      "images": []
    },
    {
      "author": "Flipkart Customer",
      "rating": 4,
      "title": "Delightful",
      "text": "The heating issue is there.\nWhen I tried to use the magic eraser the photos app got stopped frequently.\nCamera good.\nDisplay good.\nDesign good.\nPerformance - I think we need to wait for a few updates.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e89ec2410af0455a814708d421715319.jpg?q=80"
      ]
    },
    {
      "author": "Sreenath Nambiar",
      "rating": 5,
      "title": "Super!",
      "text": "I am using Pixel 4a for the past two years and just got it upgraded to 8 pro this week. I would say Google has really worked on the drawbacks they used to have and it almost paid off and I can easily say that Pixel 8 pro is meeting the expectations!! Especially the camera, it simply outperforms any other Premium phones. From the past two days of use I observed that the battery lasts for a whole day even if you use the camera so much. I need to see it furthermore after more using it for a long time. The only thing I doubt is it is priced a bit higher for the available 128 gb variants. Anyways, I can say it will not disappoint us in terms of cameras, performance  look and feel etc,",
      "images": []
    },
    {
      "author": "Ram Esakky",
      "rating": 5,
      "title": "Highly recommended",
      "text": "Have been a Google user ever since they launched the first HTC G1, G2 has been an HTC user and switched to Google, I still have Pixel 2XL and 6. Exchanged by Pixel 7 with Pixel 8 Pro. \n\nThe camera is great, I have an iPhone 13 and I feel the Pixel Camera is miles apart and I usually shoot using my DSLR; my Mobile was used only for wide angles, and I always shoot RAW. But the manual control and full RAW support at 50MP in Pixel 8 Pro gave much-needed control and comfort. But still not there yet and they removed my favorite feature Photosphere (which can be sideloaded by installing GCAM). Pictures are processed but shot on Pixel 8 Pro 50MP RAW\n\nScreen - Good one, very bright vibrant \n\nBattery - OK for a day but needs a charger at the end of the day, using a camera drains the battery faster \n\nSoftware - Smooth, but sometimes becomes unresponsive and needs a restart \n\nFace ID and Finger - This is where I have a problem, I have an iPad Pro and iPhone 13 and the face ID works like a charm. In Pixel 8 pro it is annoying neither the face ID works properly nor the fingerprint and after 2 failures I have to eventually enter the PIN, which is annoying (maybe should disable one, but what is the point if they do not work)\n\nNetwork - I have both Airtel and Jio in Pixel 8 Pro. My iPad shows 5G on Airtel, but Pixel at times would only connect in LTE mode even though the 5G network is available in the location. So, I would get 90-100 Mbps on an iPad but only 10-15 Mbps on a Pixel 8 Pro. Same location same network",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ne51a71a.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_lfjhrr3d.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_r81el6h3.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_iqjpoju1.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_dvq2ubet.jpeg?q=80"
      ]
    },
    {
      "author": "Pratik Pattanaik",
      "rating": 5,
      "title": "Terrific",
      "text": "Writing a review exactly one year after the purchase. The phone is definitely made for people who want a jack of all trades. The most exciting things about the phone are the cameras and the software. \n\nDesign is subjective, I would have preferred a smaller sized pro like the 9 series but I can't complain. The area around the camera rail/visor does accumulate dust, even with the cases. So needs periodic cleaning. Love the matte finish on the back glass and the Google logo has a pleasing texture. The phone is IP68 rated and I would say that it lives up to it. I have tried taking pictures underwater and it can survive a small time submersion. But don't dip it in sea water. The software is smart enough to turn off the ports till the phone dries up. \n\nCameras are definitely the stars of the show. Very dependable and the best combination available. The photos are close to true tone. The good thing is that all three cameras are nearly of the same resolutions which result in similar detailed photos in daylight, of course the colour balance is a bit different for each of them but most of the time you would not notice. Night photography could be better though. Videography is decent with up to 4K 60fps (30fps if using HDR). The display really compliments the HDR photos and videos. \n\nThe processor is not meant for gaming but can handle most games in medium to high setting with decent frame rate. Although it can heat up with some long gaming sessions, the larger size does allow the heat to dissipate quickly. AI tasks is where the processor really shows it's worth. Although image editing AI is done partly on the cloud there are a horde of on device AI features as well in recorder, note taking , summarising and translation etc. There's ample RAM to perform AI tasks and smoothly handle apps that you need to juggle between. \n\nFinally the software is as clean as it comes. The simple UI is a boon. The device gets regular updates and Android features will come first to the Pixel line-up before any other phone gets them.\n\nEven in October 2024, this can be a good buy since the price has come down and if there's a sale going on, grab this phone since this can be a reliable phone for at least 3 to 4 years.",
      "images": []
    },
    {
      "author": "Karthikeyan  T K",
      "rating": 5,
      "title": "Must buy!",
      "text": "Absolutely awesome, upgraded from Pixel 6a. This phone is terrific and any pixel lovers will be happy with the latest photo and video features available in this phone. Display is crisp and fantastic.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_8da9a354cd134ef6b788ced2a65bfb36.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6bb1ac648b0743f1bbe1932ca0f0f780.jpg?q=80"
      ]
    },
    {
      "author": "Ankit Sangwan",
      "rating": 5,
      "title": "Must buy!",
      "text": "Beauty with brain 🧠.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3ab3f60c2d424a4581361986d52e9fdf.jpg?q=80"
      ]
    },
    {
      "author": "Rathish At",
      "rating": 5,
      "title": "Terrific",
      "text": "Very well rounded phone , \nwith butter smooth performance, \nbest camera for pics and with 8 series video as well .\n \nHuge amount of small quality of life features like the ability to select any text or picture from any app in recents screen , digital wellbeing , adaptive charging and the general pixel experience is amazing . \n\nI personally have had decent battery . Removing from charge around 8 am and easily lasting till night with 20% left . \nThe phone Occasionally gets warm , but it is rare . \nThe phone feels premium , looks unique . \nIt is quite heavy .",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1bb032aced044a90a52662cc53b27152.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f3990d5b874849c3a87c1298f703fd7a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_dce9358e013b4b8e89b99b97c7af66b3.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_494047bd439c47b4b45baf61c563ad51.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ff14e8d2427b40b5bc5a8df44753f2c7.jpg?q=80"
      ]
    },
    {
      "author": "Oshim Sharma",
      "rating": 4,
      "title": "Does the job",
      "text": "After using since 1 week here is my review\nStarting with the pros-\nThe design and in hand feel is premium.\nCamera and display are the best part of the device.\nNow cons\nThere is definitely heating issue. I haven't played any game yet just doing casual surfing and  normal usage, it gets so hot that I have to keep switching my hands. It gets very uncomfortable. \nBattery lasts quite good hours but I am experiencing ideal battery drain. \nConsidering the price google is not giving promising results . Hope to see things getting better with future updates",
      "images": []
    },
    {
      "author": "Ashish Chauhan",
      "rating": 5,
      "title": "Mind-blowing purchase",
      "text": "Hate to Flipkart for delaying 24 days.!!!\n\nProduct is wonderful.\nEverything top notch. Just perfect.\nBelow I am attaching some camera shots.\nParrot and myana bird are 5x Telescopic with 30x max zoom.\nRest some night shots of firework. Some macro shots.\n\nUltra hdr on this device looks so good. Every device will have this feature in the near future. It feels so good to experience this only device on the planet.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d55c6e6cfb16444eb4bda70340b75738.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_786ba54014274d018af50a84114e6b45.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cc548be5d1ce4ddb9a2c351b767bd2c3.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3b79512c501b433fb0f9910255390ce5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_51f115c9965d440a89c95452273edff8.jpg?q=80"
      ]
    }
  ],
  "nothing-phone-2a": [
    {
      "author": "Ravi  Kumar",
      "rating": 5,
      "title": "Must buy!",
      "text": "I have never seen this type of phone in this price segment. \nCamera quality-Top notch \nPerformance-Top notch\nbattery-Top notch\n\nOver all best in the market. please ignore fake review i used it then i post it...",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4jqb5k98.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_pr74e2g8.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_vcho1o33.jpeg?q=80"
      ]
    },
    {
      "author": "Arindam Das",
      "rating": 4,
      "title": "Very Good",
      "text": "Not bad",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7dbc42ca3bd44e05bc62e1178c9f3216.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1b57d1b3d2814ce09c98003de7dd5207.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1645f9285a064c05bebbc0b9a505bbc1.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7dfef385930e48c4af0c4d8f19f3b456.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_897225e2855648a69b3a1c778c403630.jpg?q=80"
      ]
    },
    {
      "author": "Pritam Halder",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Pros-\nDisplay(4.5/5) good brightness.\nSpeaker (4/5) very good quality.\nSoftware(4.5/5) very light and easy usage.\nCamera (4/5)--above average.video stability amazing.can take very good selfie.\nBattery(4.2/5)-- very good battery..I don't know about the actual charging time..maybe around 1:30mint\nPerformance(3.5/5)--- taking time to open and loading app...120hz implementation is not good.haptic is very good.\n\nCons-\nVery bad build quality (2.5/5)\nCharger not included.\nNot great usage of glyph\n\nFinal verdict-It is a very good phone with few cons...I think a balance one..not for gaming.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a7d9a3571f034469ae1a048f75940899.jpg?q=80"
      ]
    },
    {
      "author": "Nandan  Das",
      "rating": 5,
      "title": "Mind-blowing purchase",
      "text": "It's a one day delivery and it's just more than 6 hours now. I'll give uh a small review about....\n\n1 - camera - 4/5 bcz each and everything is good but it's processing for sometime ( at this range camera quality is awesome better than Motorola edge 40 I can say) \n\n2- battery - No doubt it's amazing because I just used it for 3 hrs continuously like all the settings and camera and also BGMI and COD. No hitting it's just reduced to 15% to 20% within 3 hrs of continuous usage.\n\n3- Display - damn good wd 120 refresh rate. Fingerprint and all tap locks are perfectly fine and the haptics wd sound is amazing\nYou can see 4k videos(yt)and hdr videos through Netflix.\n\n4- selfie - it's really nice better than nothing 1 and real skin tone and uh can zoom also there will be no issues or blur problem.\n\nRest I need to use it for some time. \n\nYou guys can like it so that people can review. \nAnd yes the glyphs are also nice bt if uh need more battery i would suggest uh to turn off.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2136888d2cbe432380f81af83ada61bb.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f7f0ec15bf4b453aa3a45329cd0f26fb.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f3f9fad917e243dfa2ec999fb520d1cd.jpg?q=80"
      ]
    },
    {
      "author": "Gaurav Kumar",
      "rating": 4,
      "title": "Nice product",
      "text": "Phone is awesome. Camera needs a lot of work from the company. Charger should be included.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_62616cdda43b4855a4769a861a8401c8.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_75ab01b4de874c8da865b49eafb8d99e.jpg?q=80"
      ]
    },
    {
      "author": "Dip Saha",
      "rating": 5,
      "title": "Great product",
      "text": "Excellent product. The phone is very smooth. Camera quality is good but the ultra wide could have been better. Battery life is good. Overall the nothing OS is very smooth.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7d99ba357a2d47578d63a75dd0449ad6.jpg?q=80"
      ]
    },
    {
      "author": "prajapati jyoti",
      "rating": 4,
      "title": "Delightful",
      "text": "Nice phone.. \nYou can purchase easily to tou\nCamera is perfect and model also good",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_499468676a65455b9459ec77deeceb94.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f15ca4c4474c47d6868e830b0099c9a1.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2b31b2b7a54347e7bb77b77db6c794cd.jpg?q=80"
      ]
    },
    {
      "author": "Amit Kumar Priyadarshi",
      "rating": 4,
      "title": "Really Nice",
      "text": "It is something you can take a chance... Don't expect something special it's just a mid ranger phone with all good specs.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6e3c2a57272e49aa8c83901f51c9c03c.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0599b030aa8647d8a5c38df6da4aff29.jpg?q=80"
      ]
    },
    {
      "author": "Siva Nath",
      "rating": 5,
      "title": "Classy product",
      "text": "Excellent for normal use and battery full charge up to 7hrs it comes for me.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e87452bf604f407dacfce734d1705f3d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_48be7132c05042939c7e99ed65219e4a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_048a1989e04343ab904b3fa2ee3efaf3.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7f2751d1b1184b568024eeb706a551c3.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_820077bdc55a4941aa6fa47b154b4e9b.jpg?q=80"
      ]
    },
    {
      "author": "debashis mondal",
      "rating": 5,
      "title": "Awesome",
      "text": "Nothing phone 2a look very good, camera good, battery backup excellent, nothing software very useful and very fast.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6a5582ac8f51484180182a2ccd895626.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3a90d4a2b18743dba4c48e6072363c91.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ee29d1843fd840dd8f125e3a128ae42f.jpg?q=80"
      ]
    }
  ],
  "oneplus-nord-ce4": [
    {
      "author": "Pankaj Chauhan",
      "rating": 5,
      "title": "Super!",
      "text": "Guys if you want big battery with super fast charger it should be great 😃 choice also snapdragon 7gen 3 chipset excellent gaming performance and also Camaro is good overall mind blowing purchase blindly you can go 🔥",
      "images": []
    },
    {
      "author": "Manu Dhalla",
      "rating": 5,
      "title": "Fabulous!",
      "text": "Awesome 👍 thanks OnePlus",
      "images": []
    },
    {
      "author": "Flipkart Customer",
      "rating": 4,
      "title": "Good quality product",
      "text": "Good",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_40e2c24badea44e5a2e0d1427becee78.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_452c9978152d42d796eec6df533c4e0e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_20a46badba0f493a93a9dd15145b8b03.jpg?q=80"
      ]
    },
    {
      "author": "Anmol Thakur",
      "rating": 4,
      "title": "Value-for-money",
      "text": "Good phone in this price .\nCamera 10/8\nBattery 10/10\nPerformance 10/8\nDisplay10/10\nFast charging 10/10\nDesign 10/10",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_03a6c2624c8749c29feccaa7315f87b6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_323ba8d872ac4108a6d80acd5bf7fd94.jpg?q=80"
      ]
    },
    {
      "author": "Ashutosh Singh",
      "rating": 5,
      "title": "Terrific",
      "text": "Fast charging",
      "images": []
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Fabulous!",
      "text": "Very nice",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_67b224aed42d40bf8fbe91cb549e9d69.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cd83a6edfb084148ab08d4d0da9e4bf4.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4218a8579edb448faedbaee7c3c81aed.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Best phone at this price range 💕",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4212a544e83f4d68a16784a4b086339f.jpg?q=80"
      ]
    },
    {
      "author": "Ankit Sharma",
      "rating": 4,
      "title": "Delightful",
      "text": "Value for money 🤑 overall good performance nice camera 🤳 thanks to one plus",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4d9a7026b270464ab31abf87f1194ee5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3d62a0b0fd40406787b3f4ab98183ab2.jpg?q=80"
      ]
    },
    {
      "author": "Rohit Yerojwar",
      "rating": 5,
      "title": "Brilliant",
      "text": "Design can be better as it's all plastic frame and back.\nRest is all good❤️",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cd76b91838e14adb8e0a526fcb0f9565.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Wonderful",
      "text": "All is well",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0f2b0fc9d4f7403ab9ed2bd6dab7f0fe.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7ad23e412cea4708baa3313827320c39.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cfee8451dfbb4314bc72376689d37469.jpg?q=80"
      ]
    }
  ],
  "redmi-note-13-pro": [
    {
      "author": "Rakesh  Sharma",
      "rating": 4,
      "title": "Delightful",
      "text": "Nice Products 👌🏻 but Price 😒",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_33627bb0d1964707b823f15520d797d2.jpg?q=80"
      ]
    },
    {
      "author": "Saikat Sen",
      "rating": 5,
      "title": "Awesome",
      "text": "Nice camera love it",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f16485b54c5c44a7838f38b07f2f7dd6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_b681f901205441d294b20de8a94258aa.jpg?q=80"
      ]
    },
    {
      "author": "Vipulbhai Prajapati",
      "rating": 4,
      "title": "Good quality product",
      "text": "Good product, Nice camara I love MI",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_fd8ed4a3290d4f0caa055e5c266a10ba.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2af07254ae2b49dd916c6f6c653392ed.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_26bd29e3c7dd4bf48a4b904f545bae35.jpeg?q=80"
      ]
    },
    {
      "author": "Shivraj Sharma",
      "rating": 5,
      "title": "Just wow!",
      "text": "Camera 📷 Quality Very Good. I like this phone",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a425ed94ad264fda8af7639f300fe36a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_79e66c5075364df58e08359891bb8f12.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_484813da52b34704b509519ade5f0f14.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c7a8e93655584325b8f2d546c0853a4b.jpg?q=80"
      ]
    },
    {
      "author": "Chethan Billava",
      "rating": 5,
      "title": "Simply awesome",
      "text": "One of the best in its segment\nThe camera is good(install gcam for better),\nThe display is best,\nThe battery is very good,\nThe performance is good,\nThe design is best.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_864e2979d8d5448fbe3ae16d90063099.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_22355c72931e41f7be8b9e28661ebabf.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ea3a9a48c2bd415c864c49d46134d578.jpg?q=80"
      ]
    },
    {
      "author": "Subir Roy",
      "rating": 5,
      "title": "Great product",
      "text": "Super 😊",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_895325c336694d52ad6dc8a8e607ab17.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c08bbe856ce6489b8d6fdc59be417aea.jpg?q=80"
      ]
    },
    {
      "author": "Sumeet  Kashyap",
      "rating": 4,
      "title": "Good choice",
      "text": "Nice design, Awesome Display with above average camera.....",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_b567b50c1f9a4dad883a8f2985d94e27.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_42064590ba914a19810fe09057f2fb26.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f36b20de631f4b20958f84d0b530f8af.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_66716b03cdac42b5a03d93b5f3449c7e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cba63d1fe1b54df78fef8c30c25ac8ad.jpg?q=80"
      ]
    },
    {
      "author": "Uma Mahesh",
      "rating": 4,
      "title": "Wonderful",
      "text": "Mobile design excellent...while using mobile best experience but camera little bit dull 😞 battery performance good using non stop for 6hours  internet using \nOverall best for buy \n3.8/5.0",
      "images": []
    },
    {
      "author": "Pallabi Mitra",
      "rating": 5,
      "title": "Great product",
      "text": "Best Phone Ever I Love It..... Awesome 😍😍😍😍😍",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_14699eb344fc4da29b857404dee628db.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c1539a7400074109b0e560970913af66.jpg?q=80"
      ]
    },
    {
      "author": "Rubanchakaravarthi M",
      "rating": 4,
      "title": "Worth the money",
      "text": "This device is so good but the major problem is camera sum time working well sum time giving over exposed image quality redmi please give camera update and fix this problem",
      "images": []
    }
  ],
  "realme-gt-6t": [
    {
      "author": "Anirban Roy",
      "rating": 5,
      "title": "Worth every penny",
      "text": "Very nice mobile...",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1728d64bfc524cbf9ca066827d8c6fee.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_b1c6f2022c3349fea91a4b1b7ee4d8e0.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_025ac720b5a646f495244bc01a806c7b.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_465371433c8e4d49a50dc7de990a5e8a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_db5a79ff33154442a5f1e176dbf06adb.jpg?q=80"
      ]
    },
    {
      "author": "Tirtha Biswas",
      "rating": 5,
      "title": "Must buy!",
      "text": "Overall perfect but slightly heating issue when gaming",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3edbe2ef62bd4f8b81fbb39a5b37da73.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9324d4efb01449bbb47795fcbae1f39a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_84e3f5a4650847f2b112d81cb2fe7c64.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_08c98ae7d1e14814859251c6c1aae50f.jpg?q=80"
      ]
    },
    {
      "author": "Karanveer Singh",
      "rating": 4,
      "title": "Very Good",
      "text": "Really good performance \nNice battery life maximum 8 hours after full charge \nTake atleast 30 min to full charge \nCamera is average (3/5)\nPhone screen is like quite long little hard to use from one hand \nFor gaming it's good",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3ae784a652a64854b578e8f0fe20b7ce.jpg?q=80"
      ]
    },
    {
      "author": "Kartik AGHAV",
      "rating": 5,
      "title": "Excellent",
      "text": "So good phone ,best for performance and multimedia.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c21cfa42130e497582f302130e69f945.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_10b46c4cefed4894a47edc8cbe44e59d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_90563a312d8b43aeb6f07f0b9ad614a0.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cbf300241d5d43bea57bac9841542c01.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e8f9422ac7714b4a8fd13140992d64c4.jpg?q=80"
      ]
    },
    {
      "author": "Renuka devi  Naik",
      "rating": 5,
      "title": "Brilliant",
      "text": "This is absolutely a great phone with great features 💫💗 after using 15 days of experience This phone has outstanding performance and the battery charged 100 percent in 25 to 30min .the camera quality is more than my expectations too good .this is amazing guys a stunning phone worth it for sure and also for gaming this is amazing . Go for it",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4026f4a42494407e85f9d50c4e176d08.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_27de842bf15146cb8242b01bec01e3fc.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_267c2369f25544b48bcdf0da4b347d70.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Highly recommended",
      "text": "This phone is great to use and its camera is really amazing",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_3651ede72bce4fb08b278a3c612099f2.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ce61dc5a24c844e3bfa3f0d871a61a1d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2f3f7f35645848cea9bf5f94a25a11b8.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Awesome",
      "text": "Super product",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e847c00feb70420e909864cc126170c2.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_dda69fe5477c457e8540267c5a33c9c8.jpg?q=80"
      ]
    },
    {
      "author": "Hitesh Rajput",
      "rating": 5,
      "title": "Highly recommended",
      "text": "Awesome",
      "images": []
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Simply awesome",
      "text": "Very Good Device Just as Expected. So beautiful design and display Smooth in gaming just pure Excellent.\nGaming - 9/10 \nCamera - 10/10\nDisplay - 10/10\nOverall performance - 10/10 \nI play genshin impact on this no laging I play free and the cooling system is awesome 60fps constant after optimization it's give more.\nHighly recommended frome me Thanks Flipkart for safe delivery and faster delivery 💓",
      "images": []
    },
    {
      "author": "Siva Tamil lan",
      "rating": 5,
      "title": "Super!",
      "text": "Good hi",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f5d0150be0c644dcaf4548e7d0bebf05.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1bb6ea880fb54416b3e4bf7c3c2fed96.jpg?q=80"
      ]
    }
  ],
  "vivo-v30-pro": [
    {
      "author": "Gowtham Raj",
      "rating": 4,
      "title": "Good choice",
      "text": "The look and feel of the phone is very good, I am really impressed with the wave like pattern at the back, it takes all the attention, the camera is quite good and battery is mind-blowing even after using for 1-1.5 hours, after full charge, the battery will be still 100%. Overall a good phone to buy.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e37ddc7a7d2643c8ba89fa35c6c007be.jpg?q=80"
      ]
    },
    {
      "author": "SADDAM  ANSARI",
      "rating": 4,
      "title": "Nice product",
      "text": "Nice handset",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4bc745efb658430d99b370786649ebe6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_0be1072c958e4a98a5d0aa63ccaabc01.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f9062f73f90f4824831afe878d0e5396.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_c7b7f38118df4e0caddc42a880b5176b.jpg?q=80"
      ]
    },
    {
      "author": "Kashyap Thakkar",
      "rating": 5,
      "title": "Terrific purchase",
      "text": "The camera is very nice. Low light, day light and against the sun all photos are good. Battery also good but when you use very heavy then battery will be drained. Over all at this price it comes with all.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_69f618ce04dd4f93af30946c814ac28f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_57032b65bc314574b58190b2958520b9.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a144a1cbe9bd4062862cfffbce39625e.jpg?q=80"
      ]
    },
    {
      "author": "Flipkart Customer",
      "rating": 5,
      "title": "Just wow!",
      "text": "Value for money.. Fabulous camera quality..",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_05c5c9dc1b334bf1b11a181faee24672.jpg?q=80"
      ]
    },
    {
      "author": "Ajay  Solanki",
      "rating": 4,
      "title": "Delightful",
      "text": "Awesome Camera 📸, Just looking like a Wow Specially Portrait 😍",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_5237052caf874a2a9eca349229c93011.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d0727f9eb30d458dafbc63a99762b4a1.jpg?q=80"
      ]
    },
    {
      "author": "shailendra makhija",
      "rating": 5,
      "title": "Simply awesome",
      "text": "Best phone slim phone giving a premium look best camera 💞",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d8d3120837c148e7841a8a825872a9a2.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f18ea0f590d14278baf9d36000b6d9b5.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a969a0b952364fd9ad2f8f13f1d67af9.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ae12f687a9b44769bcfe0e1bad81a5aa.jpg?q=80"
      ]
    },
    {
      "author": "Raju Digambar  Gonare",
      "rating": 5,
      "title": "Wonderful",
      "text": "Camera is professional photography",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_423c49f465b145f8baf33d3fb4e06e50.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d05149250b4940138bd2b49b4e4da7d1.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7eacd2db933343e2a7fe7ace9b04471d.jpg?q=80"
      ]
    },
    {
      "author": "Anupam Hazarika",
      "rating": 5,
      "title": "Awesome",
      "text": "I read and watch a lot of reviews before buying a device. I went through almost all the reviews available on the Internet and found no cons. After using it for a couple of days I will suggest you to go for this mobile. Each camera is a capable shooter , like DSLR and captured pics are of  true colours. The screen is bright and smooth. It takes 40/45 minutes to fully recharge the battery. No lags, buttery smooth functionality. Definitely a yes. Go for it... You will be amazed with the capability of this phone. I brought the 12/512 version.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_506c027820774836836a8924be529be2.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_2d94130531c040589bf66b96f814d02e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_1710ef70965447bf93385ae17b7ef311.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d055b3964ea24ae1ae7209d899fbb56b.jpg?q=80"
      ]
    },
    {
      "author": "MUSTAQ ALI SIDDIQUI",
      "rating": 5,
      "title": "Brilliant",
      "text": "The Proterat camera is awesome day light. Battery backup is good and performance is good. But this price range IP56 rating is not good.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_268dc1fa723844e68fbff44f3558566a.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_ea5e80e6b9e44dac92142f9870070670.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_7629ac8234d64e7088656a00f43a2460.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_59acc5d042694c078bd7c4963f56146c.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d93056bfb52044038bc8c4a4d34996c2.jpg?q=80"
      ]
    },
    {
      "author": "Nabarun Goswami",
      "rating": 4,
      "title": "Value-for-money",
      "text": "So far..the mobile is good, the camera quality is really good , but video stabilization is not that great.\n\nBattery is decent, very slim and Gorgeous, \nNice work by VIVO",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f726dcb90b1d4297958a1e9893d25543.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a1a3281a162b4c47a276a7ac8b4d763d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d6369a2a0592417d91631b39ad91215e.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_02e3a0cb35d648fab3d730684930caa1.jpg?q=80"
      ]
    }
  ],
  "motorola-edge-50-pro": [
    {
      "author": "Tanmay Agarwal",
      "rating": 4,
      "title": "Value-for-money",
      "text": "Reviewing after 2days of using Moto Edge 50pro (125W, 12gb RAM variant) -\n\nDisplay - 10/10\nBattery - 8/10\nCamera - 8/10\nCharging - 9/10\n\nPros - \nLight weight, premiumness, flagship features\n\nCons-\nLots of heating issues while charging, booting, long time scrolling, Battery drains little quick as expected.\n\nCharging speed(125W): \n0-50% in 11min\n0-80% in 20mins\n0-100% in 29mins.\n\nThis phone is very good as per the specs provided. You can go for it. I hope heating issues will be resolved in future updates.\n\nEverything depends on usage and P2P, the above views are my observations and may differ.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_a546ea72670042bda6116eab5a89182f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_beb1cc336b5b44f0bb93d229f7c1a58f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_073b315fe18e40e8931f9b5dd7a32669.jpg?q=80"
      ]
    },
    {
      "author": "Mayur Mule",
      "rating": 5,
      "title": "Excellent",
      "text": "I have been using this mobile for the last 6 days and overall I am very Happy with this mobile. \n\n1. Design: The design is very eye-catching and, feels very good and confident to hold in hand.\n\n2. Camera: Camera set up is really awesome and best in this segment. I was impressed with the night photography. The best cameras. \n\n3. Screen: Very impressive screen, eye comfort, and curved screen gives a very unique look to the phone. \n\n4. Battery: Battery back is good for one full day by keeping the internet all the time on. I especially want to talk about a 125W charger which really charges mobile in less time. \n\nI am really happy with this mobile and recommend buying it.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e3f2acbb83d3456da1790aa178d57158.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_06ab4af6bd814f78bfe62f85e91eafe8.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_16e8e66c953f4ecbaf423f8427d37264.jpg?q=80"
      ]
    },
    {
      "author": "Umeshchandra Mane",
      "rating": 5,
      "title": "Great product",
      "text": "Light weight, premium design and great camera",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_220ad9a442154b6dbc0c634ad3186d19.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_e19500eb5533456fa0a64d5de9aa5eb5.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_b93cdbcd2f854492bf00baac9aa2f0f7.jpeg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_cfa5509dc71b4a5bb5373e88a668e746.jpeg?q=80"
      ]
    },
    {
      "author": "Rohit Kumar",
      "rating": 5,
      "title": "Best in the market!",
      "text": "Very nice camera",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_91aaf80fb9be475d9ef393218b4c1a72.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_4841854cc2ae4675b64706df4ab1c1f7.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_480a8d580b08494b806949c718ebf26d.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_41cb7513a21c43fdbdd0a7ee5f950730.jpg?q=80"
      ]
    },
    {
      "author": "bharat manchikalapati",
      "rating": 5,
      "title": "Just wow!",
      "text": "Do not believe the negative reviews. This is an amazing phone. I've switched from iPhone 11 and I'm in love with this already. I also got iPhone 14 plus for my wife but believe me this is much better than iPhone interms of display. \n\nDisplay - 10/10 - The display is awesome. Crystal clear 1.5k resolution. The colours are punchy and lively. I'm using a 120Hz refresh rate and it's smooth as butter. Edge to edge display is really awesome. If I have to pick one thing about the phone then it's the display. \n\nCamera - 9/10 - I haven't tested the camera a lot but the photos are coming really well. \n\nBattery - 10/10 - No heat at all when charging the phone and it's changing insanely fast. I got a 128 watt charger along with this phone and it goes  0% to 100% in just 20 min. And I'm easily getting one day. I'm a medium-heavy user and I'm getting one day charging easily. \n\nPerformance - 9/10 - I got 12GB Ram version and no lags whatsoever. I played a few games and did not see any frame drops or lags. And it's handling high graphic settings like it's nothing. \n\nDesign -9/10 -  it's very sleek and thin. I got the Lavender colour and I'm in love with it. When you hold it, it feels like a 60k-70k premium phone. \n\nOverall Verdict - I have been an iPhone user for the past few years and I got bored with it. But I have been reluctant to switch to Android because the iPhone is amazing. I've used pixel 7a for a month before this but It had a lot of issues with fingerprint and face id recognition. But after using the Motorola edge 50 pro I might not switch back to the iPhone anytime soon. This is an amazing phone and you get everything compared to a high end premium phone. I'm in love with the display and you should definitely consider it.",
      "images": []
    },
    {
      "author": "Ankit Nautiyal",
      "rating": 4,
      "title": "Wonderful",
      "text": "Just received my moto edge 50 pro yesterday. Look wise mobile is very good.\nAll accessories were in the box, although the back cover is kind of useless. \nThe 125W charger is charging mobile fast as advertised by moto.\nAs of now the performance looks great. Camera is great specially front camera. Colors are quite realistic.\nI've given 4 star as of now, will update my review after few weeks of use.",
      "images": []
    },
    {
      "author": "GAURANG CHUDASAMA",
      "rating": 4,
      "title": "Good choice",
      "text": "Very Good Camera, Very fast charging speed but battery is little bit on lower side but enough for normal user. Nice design and very comfortable feel in hand. Over all good phone.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_5ccb04849f184803b729605c2f6ac12f.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_9128daa05baf4a8f93f03eb6bb8451ff.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6898a0fbc78c4ea1b5d8d4922c80bbae.jpg?q=80"
      ]
    },
    {
      "author": "Joydeb Baidya",
      "rating": 5,
      "title": "Perfect product!",
      "text": "Super 😍💯",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_dcab8dd74e6d4179b2ee1adf6c09348c.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_6adb659bc51f4b4abd362abe817556a6.jpg?q=80",
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_f95e5f31ec074266ba21e2ee69ba4250.jpg?q=80"
      ]
    },
    {
      "author": "Manaal M Maniyar",
      "rating": 5,
      "title": "Just wow!",
      "text": "The beautiful beast is here!\n\nWell, Moto has just nailed it. The first impressions are so good.\n\nBeautiful:\n1. The phone looks gorgeous in the hand.\n2. Its slim and Bezel-less curved display makes it look ultra premium.\n3. The back of the phone has got a velvet finish which makes it Scratch proof.\n\nBeast:\n1. The battery is insane. It lasted for 1.5 days easily for me with hotspot on and heavy usage. Moreover it charges completely in 30 min with the 125W charger given with the 12gb variant.\n\n2. The performance is as smooth as my girlfriend's skin.\n\n3. The camera details are crazy. Here's Einstein (my dog-baby and TailBlaze co-founder) in the photo. The setting was low-light but the details are crazy.\n4. Wireless charging worked pretty smooth in my car and the speaker is insanely loud and clear.\n5. Network reception is great too!\n\nI mean this is the best phone I have ever put my hands on in this price range out of the 100 phones I have reviewed.\n\nKudos to Team Moto!",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_28eff5ae98f542938fe2c07b5bbf51b2.jpg?q=80"
      ]
    },
    {
      "author": "Chinmay Joshi",
      "rating": 4,
      "title": "Wonderful",
      "text": "Overall very decent product. Great work by Motorola team. Camera, display, design is very good. One can definitely go for buying it. Only observation is while charging with 125 watt charger,phone gets really heated up. Rest is fine. Ask me in case of any query.",
      "images": [
        "https://rukminim1.flixcart.com/blobio/500/500/imr/blobio-imr_d3db1dfb427847638f27ca4f0c8ef12f.jpg?q=80"
      ]
    }
  ]
};
