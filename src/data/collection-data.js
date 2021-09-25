import SingleProduct from "../component/single-product/single-product.component";
import MultiProduct from "../component/multi-product/multi-product.component";
import ListProduct from "../component/list-product/list-product.component";
import OptionCarousel from "../component/option-carousel/option-carousel.component";


const COLLECTION_DATA = {
    tickets: {
        title:"Amazon Pay | Book your travel tickets",
        lists: {
            flightTickets: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/SeptGW/Low_Flight_Card-1_186x116._SY116_CB643782067_.jpg",
                label: "Flight Tickets"
            },
            busTickets: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/SeptGW/Low_Bus_Card-3_186x116._SY116_CB643782067_.jpg",
                label: "Bus Ticktes"
            },
            trainTickets: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/SeptGW/Train_Rev_Card-2_186x116._SY116_CB643782640_.jpg",
                label: "Train Tickets"
            },
            essentialTravelProducts: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img16/AmazonPayTravels/SeptGW/Low_Essential_Card-4_186x116._SY116_CB643782067_.jpg",
                label: "Essential trvael products"
            }
        },
        isCustom: false
    },
    men: {
        title:"Styles for Men | Up to 70% off",
        lists: {
            clothing:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg",
                label: "Clothing"
            },
            footwear:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg",
                label: " Footwear"
            },
            watches:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg",
                label: "Watches"
            },
            bagsAndLuggage:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg",
                label: "Bags & luggage"
            }
        },
        isCustom: false
    },
    autoParts: {
        title:"Automotive essentials | Up to 60% off",
        lists: {
            cleaningAccessories: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
                label: "Cleaning accessories"
            },
            tyreAndRim: {
                imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
                label: "Tyre & rim care"
            },
            helmets:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
                label: "Helmets"
            },
            vacuumCleaner: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
                label: "Vacuum cleaner"
            }
        },
        isCustom: false
    },
    signUp: {
        component: SingleProduct,
        data: {
                title: "Effective dishwashing for Indian cooking", 
                imageUrl:""
        },
        isCustom: true
    },
    women: {
        title:"Styles for Women | Up to 70% off",
        lists: {
            clothing: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg",
                label: "Clothing"
            },
            footwearAndHandbags:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/6-min._SY116_CB666463598_.jpg",
                label: "Footwear+Handbags"
            },
            watches:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/8-min._SY116_CB666463598_.jpg",
                label: "Watches"
            },
            fashionJewellery:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg",
                label: "Fashion jewellery"
            }
        },
        isCustom: false
    },
    homeAppliance: {
        title:"Top picks for your home",
        lists: {
            air_conditioner: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
                label: "AC's"
            },
            refrigerator:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
                label: "Refrigerator"
            },
            microwave: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
                label: "Microwave"
            },
            washing_machine:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
                label: "Washing machine"
            }
        },

        isCustom: false
    },
    amazonPay: {
        component: SingleProduct,
        data: {
            title: "Pay your credit card bills on Amazon", 
            imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
        },
        isCustom: true
    },
    tools:{
        title:"Professional tools, testing & more",
        lists:{
            professionalTools: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg",
                label: "Professional tools"
            },
            measuringInstruments: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg",
                label: "Measuring instruments"
            },
            cleaningSupplies: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg",
                label: "Cleaning Supplies"
            },
            medicalSupplies: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg",
                label: "Medical supplies"
            }
        },
        isCustom: false
    },
    dishWashing: {
        component: SingleProduct,
        data: {
            title: "Effective dishwashing for Indian cooking", 
            imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg"
        },
        isCustom: true
    },
    stationarySupply: {
        component: SingleProduct,
        data: {
            title: "Up to 60% off | Top deals on stationery supplies", 
            imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg"
        },
        isCustom: true
    },
    babyToys: {
        title:"Gift a smile to your baby",
        lists: {
            clothing: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Soft_toys._SY116_CB667648551_.jpg",
                label: "Soft toys"
            },
            footwearAndHandbags:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Sound_toys._SY116_CB667648551_.jpg",
                label: "Sound toys"
            },
            watches:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Rattles._SY116_CB667648551_.jpg",
                label: "Rattles"
            },
            fashionJewellery:{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Sorting_toys._SY116_CB667648551_.jpg",
                label: "Sorting toys"
            }
        },
        isCustom: false
    },
    fireStick: {
        component: SingleProduct,
        data: {
            title: "Fire TV Stick Lite", 
            imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/SMPmso/MSO_CC-_Sheldon._SY304_CB657532823_.jpg"
        },
        isCustom: true
    },
    kitchenWare: {
        title: "Everyday essentials that you might like",
        lists:{
            stoves: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg",
                label: "Stoves"
            },
            cookware: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg",
                label: "Cookware"
            },
            thermos_flask: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg",
                label: "Thermos & flask"
            },
            tableware: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg",
                label: "Tableware"
            }
        },
        isCustom: false
    },
    electronics: {
        title: "Electronics devices for home office",
        lists:{
            smartWatches: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg",
                label: "Smartwatches & fitness trackers"
            },
            tablets: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg",
                label: "Tablets"
            },
            laptops: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg",
                label: "Laptops"
            },
            monitors: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg",
                label: "Monitors"
            },
        },
        isCustom: false
    },
    effectiveDishWashing: {
        component: SingleProduct,
        data: {
            title: "Effective dishwashing for Indian cooking", 
            imageUrl:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/DW_CC_-_March_379x304._SY304_CB655397356_.jpg"
        },
        isCustom: true
    },
    masks: {
        title: "Pick from these types of masks",
        lists:{
            N95: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/1._SY116_CB656502854_.jpg",
                label: "N95 Masks & respirators"
            },
            clothMask: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/2._SY116_CB656502854_.jpg",
                label: "Cloth masks"
            },
            kidsMask: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/PC_QC_186x116._SY116_CB670981909_.jpg",
                label: "Kids mask"
            },
            maskStore: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/4._SY116_CB656502854_.jpg",
                label: "View the mask store"
            }
        },
        isCustom: false
    },
    pocketFriendly: {
        title: "Pocket Friendly | Up to 80% off",
        lists: {
            clothing: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/9-min._SY116_CB666463598_.jpg",
                label: "Clothing | Under ₹599"
            },
            bagpacks: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/11-min._SY116_CB666463598_.jpg",
                label: "Bagpacks | Under ₹599"
            },
            footwear: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/10-min._SY116_CB666463598_.jpg0",
                label: "Footwear | Under ₹599"
            },
            allOffer: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/12-min._SY116_CB666463598_.jpg",
                label: "View all offers | Under ₹599"
            }
        },
        isCustom: false
    },
    echoDevices: {
        title: "Echo devices | Smart speaker with Alexa",
        lists: {
            echoDot: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/FTV-GW/MSO/QC--PC-white1X._SY116_CB660361586_.jpg",
                label: "Echo Dot"
            },
            allNewECho :{
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-02_1X._SY116_CB660513597_.jpg",
                label: "All-new Echo Dot"
            },
            echoShow: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-03_1X._SY116_CB660513597_.jpg",
                label: "Echo Show 5"
            },
            amazonEcho: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-04_1X._SY116_CB660513597_.jpg",
                label: "Amazon Echo"
            }
        },
        isCustom: false
    },
    computerPeripherals: {
        title: "Computing peripherals & supplies",
        lists: {
            printers: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_13._SY116_CB655804868_.jpg",
                label: "Printers"
            },
            routers: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_14._SY116_CB655804871_.jpg",
                label: "Routers & hotspots"
            },
            computerAccessories: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_15._SY116_CB655804868_.jpg",
                label: "Computer accessories"
            },
            stationeySupply: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_16._SY116_CB655804868_.jpg",
                label: "Stationery & office supplies"
            }
        },
        isCustom: false
    },
    kindle: {
        title: "Kindle E-readers | Starting ₹7,999",
        lists: {
            paperWhite: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/DC_QC_Kindle_1x_1._SY116_CB448577593_.jpg",
                label: "Kindle Paperwhite"
            },
            allNew: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/GWFaizan/All_New_Kindle_B07FQ1B3TQ_DC_C_1x._SY116_CB422370017_.jpg",
                label: "All-New Kindle"
            },
            oasis: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/DC_QC_Kindle_1x_3._SY116_CB448577593_.jpg",
                label: "Kindle Oasis (9th Gen)"
            },
            paperWhite4G: {
                imageUrl: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/MSO/desktop/DC_QC_Kindle_1x_4._SY116_CB448577593_.jpg",
                label: "Kindle Paperwhite 4G"
            }
        },
        isCustom: false
    },
    shoppingTrends: {
        title: "Inspired by your shopping trends",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/615CXlFtDDS._AC_SY310_.jpg",
                label: "iQOO Z3 5G (Cyber B... ₹20,990"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/81B0HJigO-L._AC_SY310_.jpg",
                label: "Redmi Note 10S (Dee... ₹14,999"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/51bH91+J8yS._AC_SY310_.jpg",
                label: "HEMPPA [Scratc Pro... ₹150.00"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/31DcxTNVhwL._AC_SY310_.jpg",
                label: `Lustree Plain Flexible... ₹149.00`
            },
        },
        isCustom: false
    },
    browsingHistory: {
        title: "Inspired by your browsing history",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/71YHTqeOeZL._AC_SY310_.jpg",
                label: "Logitech MK215 Wireles... 1,295.00"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/61d4mVumQhL._AC_SY310_.jpg",
                label: "Dell Km117 Wireless Key... 1.539.00"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/41Yiu0oYaUL._AC_SY310_.jpg",
                label: "Lenovo 100 Wireless Key... 1,399.00"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/6124vLIswVL._AC_SY310_.jpg",
                label: "Logitech MK240 Nano W... 1,545.00"
            }
        },
        isCustom: false
    },
    footwear: {
        component: MultiProduct,
        data: {
            title: "Top picks | Footwear | Up to 60% off", 
            imageList:[
                "https://m.media-amazon.com/images/I/81+g9Vyww-L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51I8wNtYWGL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51g6S2XoAcL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61o7Y6a-4GL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/81foDd-vw0L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/514LM1oCgVL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71KBryMIlDL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61axl6Jt1rL._AC_SS260_.jpg"
            ]
        },
        isCustom: true
    },
    everyDayEssential: {
        title: "Everyday essentials that you might like",
        lists: {
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/819VJXRtzSL._AC_SY310_.jpg",
                label: "Romsons Disp... ₹454"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/71k7GX9k90S._AC_SY310_.jpg",
                label: "Careview Mod... ₹699.00"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/51GGreVxJjS._AC_SY310_.jpg",
                label: "PRIMASK Pre... ₹399.00"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/61eDSNX45LS._AC_SY310_.jpg",
                label: "Medinain 3PI... ₹325"
            }
        }
    },
    parenting: {
        title: "Newborn parenting tips | Everything you need to…",
        lists: {
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/41pK7iG87eL._AC_SR420,420_.jpg",
                label: "Must read tips for new mothers"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/31XBASFAYzL._AC_SR420,420_.jpg",
                label: "Breastfeeding tips, challenges & more"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/415Q6Bm2gCL._AC_SR420,420_.jpg",
                label: "Diaper rashes & myths"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/41xSadIeoiL._AC_SR420,420_.jpg",
                label: "Things to buy for your baby"
            }
        }
    },
    recommendedDeal: {
        component: ListProduct,
        data: {
            title: "Recommended deals for you", 
            listItem:[
                {
                    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51IMkO4wP6L._AC_SY240_.jpg",
                    label: "Wall stickers & Posters from Wolpin",
                    price:"₹ 189.00 - ₹ 394.00",
                    time: "Ends in 1:12:19"
                },
                {
                    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/510hr49EaKL._AC_SY240_.jpg",
                    label: "Nutty Greety",
                    price:"₹ 222.00 - ₹ 12,499.00",
                    time: "Ends in 1:02:08"
                },
                {
                    imageUrl: "https://m.media-amazon.com/images/I/41oK+rXtssS._AC_SY80_.jpg",
                    label: "Storite USB 20 A to Mini 5 pin B Cable for External HDDSCam",
                    price:"₹ 249.00 ₹ 699.00",
                    time: ""
                }
            ]
        },
        isCustom: true
    },
    furniture: {
        component: MultiProduct,
        data: {
            title: "Up to 50% off | Bestselling in furniture", 
            imageList:[
                "https://m.media-amazon.com/images/I/71sIzoVCBDS._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71msWIzlvwS._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61zo23M5M5L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61jxiZE0lDS._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61g8pocluXL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/31m7eJXjF1L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/617ZDqtyq-S._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71fL+jK2F0L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61lCAifKeJS._AC_SS260_.jpg"
            ]
        },
        isCustom: true
    },
    shimmy: {
        component: SingleProduct,
        data: {
            title: "New Short Film | Shimmy on miniTV", 
            imageUrl:"https://m.media-amazon.com/images/I/61LO5lO+-hL._AC_SR1050,1050_.jpg"
        },
        isCustom: true
    },
    homeKitchen: {
        component: MultiProduct,
        data: {
            title: "Starting ₹79 | Bestsellers from home & kitchen",
            imageList: [
                "https://m.media-amazon.com/images/I/51GNDwvogcL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/312YOAG9luL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/81ehpjqrhUL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71LIfhSpAYS._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61Exu99RZFL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51OZcrtHduL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71ctVUjUqxL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61H8bgmxePL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71qshn-Y67L._AC_SS260_.jpg"
            ]
        },
        isCustom: true
    },
    topBrands: {
        title: "Latest & Upcoming launches from top brands",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/21YQPEhsGTL._AC_SR420,420_.jpg",
                label: "iPhone 13 Pro | Pre Book now "
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/41bHFl-bFzL._AC_SR420,420_.jpg",
                label: "Xiaomi 11 Lite NE 5G: Launch on 29th Sep"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/41AuCdcitiL._AC_SR420,420_.jpg",
                label: "Samsung M52 5G: Launch on 28th Sep,12 PM"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/41rF6Dk9NTL._AC_SR420,420_.jpg",
                label: `Redmi 10 Prime: Starting a₹12,499`
            },
        },
        isCustom: false
    },
    homeDining: {
        component: MultiProduct,
        data: {
            title: "Kitchen & dining bestsellers from small businesses",
            imageList: [
                "https://m.media-amazon.com/images/I/41thuHI6i-L._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/81kY+NQcQqL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/91mTA+39SrL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51sSOIINpDL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51JvvCkKeFL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61vCl6LwqQL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/319jOHiacEL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/81wPa3sBdwL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71hZlRhpwvS._AC_SS260_.jpg"
            ]
        },
        isCustom: true
    },
    cookware: {
        component: MultiProduct,
        data: {
            title: "Best selling in cookware & dining",
            imageList: [
                "https://m.media-amazon.com/images/I/61c-GtJ+0eL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51RXzjrUmkL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/61JlllBcGpL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51RhWrwmTNL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71AsCDQvKGL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/619A6jkbOhL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51aSy5bDbML._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/71uZLCFw3sL._AC_SS260_.jpg",
                "https://m.media-amazon.com/images/I/51tjMeONVoL._AC_SS260_.jpg"
            ]
        },
        isCustom: true
    },
    healthAndHygiene: {
        title: "Everyday essentials that you might like",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/611GgOYLwwL._AC_SY310_.jpg",
                label: "Himalaya Neem… ₹94.00"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/61rRJ5HnImS._AC_SY310_.jpg",
                label: "Dettol Original… ₹229.00"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/611XEa+OtsL._AC_SY310_.jpg",
                label: "NIVEA Men Deodorant… ₹139.00"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/41u0oQ3Jk-L._AC_SY310_.jpg",
                label: `POND'S Bright Beauty… ₹243.75`
            },
        },
        isCustom: false
    },
    proToolsAndSupplies: {
        title: "Professional tools, safety supplies & more",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/41hbMmiSb5L._AC_SR420,420_.jpg",
                label: "Cleaning supplies"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/41HsnslGTfL._AC_SR420,420_.jpg",
                label: "Power tool accessories"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/31kOS1PTedL._AC_SR420,420_.jpg",
                label: "Packaging supplies"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/41oZHyu19+L._AC_SR420,420_.jpg",
                label: `Personal safety supplies`
            },
        },
        isCustom: false
    },
    festiveSeason: {
        title: "Brighten up your space this festive season with these expert decor ideas",
        lists:{
            item1: {
                imageUrl: "https://m.media-amazon.com/images/I/71-FJ+cN7IL._AC_SR420,420_.jpg",
                label: "Dress your center table with mosaic tea lights"
            },
            item2: {
                imageUrl: "https://m.media-amazon.com/images/I/71s49SD-JTL._AC_SR420,420_.jpg",
                label: "Go creative with terracotta jars"
            },
            item3: {
                imageUrl: "https://m.media-amazon.com/images/I/71s7MczCEqL._AC_SR420,420_.jpg",
                label: "Add festive warmth with a hanging candle holder"
            },
            item4: {
                imageUrl: "https://m.media-amazon.com/images/I/71IkvjggrbL._AC_SR420,420_.jpg",
                label: `Add a rich, contemporary vibe with a Moroccan lamp`
            },
        },
        isCustom: false
    },
    dealOfTheDay: {
        component: OptionCarousel,
        data: {
            title: "Deals of the day", 
            productList: [
                {
                    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/31LC-FBgpBL._AC_SY600_.jpg",
                    label: "Top Offers | pTron, Wecool Mobile Accessories & More",
                    price: "₹ 129.00 - ₹ 1,999.00",
                    time: "Ends in 4:08:04"
                },
                {
                    imageUrl: "https://m.media-amazon.com/images/I/71N6npRR-AL._SL1200_.jpg",
                    label: "Vivo V20 Pro | Extra Rs. 4500 Coupon Discount",
                    price: "₹ 29,990.00",
                    time: "Ends in 4:07:30"
                },
                {
                    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/31lkxF1dMvL._AC_SY600_.jpg",
                    label: "boAt headphones and speakers",
                    price: "₹ 349.00 - ₹ 7,999.00",
                    time: "Ends in 52:06:23"
                },
                {
                    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/318lBPSqnGS._AC_SY600_.jpg",
                    label: "Bestselling Headphones From Boult Audio",
                    price: "₹ 1,299.00 - ₹ 1,499.00",
                    time: "Ends in 4:05:47"
                }
            ]
        },
        isCustom: true
    }
}

export default COLLECTION_DATA;