const Data = {
Home:{
    MostOrdered:[
      {
        id:1,
        link:require('./SamplePhotos/Product1-1.png'),
        model:'Tefal',
        name:'Pans collection',
        oldPrice:250,
        price:200,
        rating:3,
        isNew:false
      },
      {
        id:2,
        link:require('./SamplePhotos/Product1-2.png'),
        model:'Espresso',
        name:'Breville',
        oldPrice:2000,
        price:1500,
        rating:2,
        isNew:true
      },
      {
        id:3,
        link:require('./SamplePhotos/Product1-3.jpg'),
        model:'Collection',
        name:'Handy tools',
        oldPrice:300,
        price:200,
        rating:4,
        isNew:false
      }
    ],NewProducts:[
      {
        id:1,
        link:require('./SamplePhotos/Product2-1.jpg'),
        model:'Fresh',
        name:'Home mug',
        oldPrice:50,
        price:20,
        rating:5,
        isNew:true
      },
      {
        id:2,
        link:require('./SamplePhotos/Product2-2.jpg'),
        model:'Shampoo',
        name:'John Masters ',
        oldPrice:50,
        price:40,
        rating:4,
        isNew:true
      },
      {
        id:3,
        link:require('./SamplePhotos/Product2-3.jpg'),
        model:'FIJI',
        name:'Water bottle',
        oldPrice:10,
        price:7,
        rating:3,
        isNew:true
      }
    ],Perfumes:[
      {
        id:1,
        link:require('./SamplePhotos/Product3-1.jpg'),
        model:'Chanel',
        name:'Chanel N5',
        oldPrice:120,
        price:80,
        rating:4,
        isNew:false
      },
      {
        id:2,
        link:require('./SamplePhotos/Product3-2.jpg'),
        model:'Dior',
        name:'Miss Dior',
        oldPrice:110,
        price:90,
        rating:5,
        isNew:true
      },
      {
        id:3,
        link:require('./SamplePhotos/Product3-3.jpg'),
        model:'PHLUR',
        name:'SOMEBODY WOOD',
        oldPrice:100,
        price:80,
        rating:3,
        isNew:false
      }
    ],Clothes:[
      {
        id:1,
        link:require('./SamplePhotos/Product4-1.jpg'),
        model:'PALA',
        name:'Winter Jacket M',
        oldPrice:50,
        price:40,
        rating:4,
        isNew:true
      },
      {
        id:2,
        link:require('./SamplePhotos/Product4-2.jpg'),
        model:'FLAIR',
        name:'Shirt',
        oldPrice:55,
        price:50,
        rating:3,
        isNew:true
      },
      {
        id:3,
        link:require('./SamplePhotos/Product4-3.jpg'),
        model:'Vogue',
        name:'Jeans',
        oldPrice:52,
        price:48,
        rating:2,
        isNew:false
      }
    ],Electric:[
      {
        id:1,
        link:require('./SamplePhotos/Product5-1.jpg'),
        model:'Ronix',
        name:'Elictric Drill',
        oldPrice:80,
        price:70,
        rating:4,
        isNew:true
      },
      {
        id:2,
        link:require('./SamplePhotos/Product5-2.jpg'),
        model:'dyson',
        name:'Vacuum Cleaner',
        oldPrice:120,
        price:100,
        rating:5,
        isNew:true
      },
      {
        id:3,
        link:require('./SamplePhotos/Product5-3.jpg'),
        model:'LG',
        name:'52 inch TV',
        oldPrice:250,
        price:200,
        rating:4,
        isNew:false
      }
    ]

},
Products:[
  [
        [
          {
            id:1,
            link:require('./SamplePhotos/Product1-1.png'),
            model:'Tefal',
            name:'Pans collection',
            oldPrice:250,
            price:200,
            rating:3,
            isNew:false
          },
          {
            id:2,
            link:require('./SamplePhotos/Product1-2.png'),
            model:'Espresso',
            name:'Breville',
            oldPrice:2000,
            price:1500,
            rating:2,
            isNew:true
          },
          {
            id:3,
            link:require('./SamplePhotos/Product1-3.jpg'),
            model:'Collection',
            name:'Handy tools',
            oldPrice:300,
            price:200,
            rating:4,
            isNew:false
          }
        ]
]
],
Cart:[
        {
          id:1,
          name:'Order 1',
          image:require('./SamplePhotos/Product1-1.png'),
          price:100,
          quantity:1
        },{
          id:2,
          name:'Order 2',
          image:require('./SamplePhotos/Product1-2.png'),
          price:300,
          quantity:2
        },{
          id:3,
          name:'Order 3',
          image:require('./SamplePhotos/Product1-3.jpg'),
          price:400,
          quantity:2
        },{
          id:4,
          name:'Order 4',
          image:require('./SamplePhotos/Product1-1.png'),
          price:450,
          quantity:1
        }
],
ProductDetails:{
        id:1,
        name:'Pans collection',
        images:[
          require('./SamplePhotos/Product1-1.png'),
          require('./SamplePhotos/Product1-2.png'),
          require('./SamplePhotos/Product1-3.jpg'),
        ],
        oldPrice:200,
        discount:50,
        price:100,
        title:'Product name and some details',
        rating:4,
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."

},
Sections:[
      {
        id:1,
        name:'Electronic Devices',
        image:require('./SamplePhotos/Section1.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section1-1.jpg'),
          },
          {
            id:2,
            name:'Healthy Tools',
            image:require('./SamplePhotos/Section1-2.jpg'),
          },
          {
            id:3,
            name:'Lights',
            image:require('./SamplePhotos/Section1-3.jpg'),
          },
          {
            id:4,
            name:'Home Decors',
            image:require('./SamplePhotos/Section1-4.jpg'),
          },
          {
            id:5,
            name:'Kitchen',
            image:require('./SamplePhotos/Section1-5.jpg'),
          }
        ]
      },{
        id:2,
        name:'Home And Kitchen',
        image:require('./SamplePhotos/Section2.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section2.jpg'),
          }
        ]
      },{
        id:3,
        name:'Home Furniture',
        image:require('./SamplePhotos/Section3.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section3.jpg'),
          }
        ]
      },{
        id:4,
        name:'Fitness',
        image:require('./SamplePhotos/Section4.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section4.jpg'),
          }
        ]
      },{
        id:5,
        name:'Beauty And Care',
        image:require('./SamplePhotos/Section5.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section5.jpg'),
          }
        ]
      },{
        id:6,
        name:'Electronics',
        image:require('./SamplePhotos/Section6.jpg'),
        subSections:[
          {
            id:1,
            name:'All Products',
            image:require('./SamplePhotos/Section6.jpg'),
          }
        ]
      }
    ]
};

export default Data;
