import Header from '../../component/header/header.component';
import Nav from '../../component/nav/nav.component';
import Carousel from '../../component/carousel/carousel.component';
import Collection from '../../component/collection/collection.component';
import ProductCarousel from '../../component/product-carousel/product-carousel.component';
import Footer from '../../component/footer/footer.component';

import COLLECTION_DATA from '../../data/collection-data';
import PRODUCT_DATA from '../../data/product-data';

import {PageContentContainerPS, DeskPageContentPS, AdBlockPS, AdImgPS, MobPageContentPS} from './homepage.styles.jsx';
import HistoryCarousel from '../../component/history-table-carousel/history-carousel.component';
import MobProductCarousel from '../../component/mob-product-carousel/mob-product-carousel.component';

const collectionGroup = [
    ["tickets", "men", "autoParts", "signUp", "women", "homeAppliance",
     "amazonPay", "tools"],
    ["dishWashing", "stationarySupply", "babyToys", "fireStick"],
    ["kitchenWare", "electronics", "effectiveDishWashing", "masks"],
    ["pocketFriendly", "echoDevices", "computerPeripherals", "kindle"],
    ["shoppingTrends", "browsingHistory", "footwear", "everyDayEssential", "parenting", 
    "recommendedDeal", "furniture", "shimmy", "homeKitchen", "topBrands", "homeDining",
    "cookware"],
    ["healthAndHygiene"],
    ["proToolsAndSupplies", "festiveSeason"]
]

const collectionData = (obj, arr) => Object.keys(obj)
            .filter(key => key === arr.filter(item => key === item)[0])
            .reduce((res, key) => {res[key] = obj[key]; return res}, {});
            


const HomePage = () => {
   const {todaysDeal, 
          homeFurniture80_Off, 
          glassWare80_Off, 
          everyDayEssential, 
          handBags,
          smartPhones,
          computerAccessories, 
          historyProduct,
          multiService,
          greatIndianFestival,
          budgetFriendly,
          seasonalProduct} = PRODUCT_DATA;

    return(
        <PageContentContainerPS>
            <Header />
            <Nav/>
            <MobProductCarousel productData={multiService}/>
            <Carousel/>
            <DeskPageContentPS>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[0])}/>
                <ProductCarousel productData={todaysDeal}/>
                <ProductCarousel productData={homeFurniture80_Off}/>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[1])}/>
                <ProductCarousel productData={glassWare80_Off}/>
                <ProductCarousel productData={everyDayEssential}/>
                <AdBlockPS>
                    <AdImgPS src={`https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg`}
                            alt={"adblock"}
                    />
                </AdBlockPS>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[2])}/>
                <ProductCarousel productData={smartPhones} isVideoList/>
                <ProductCarousel productData={handBags}/>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[3])}/>
                <ProductCarousel productData={computerAccessories}/>
                <HistoryCarousel productData={historyProduct}/>
            </DeskPageContentPS>
            <MobPageContentPS>
                <AdBlockPS>
                    <AdImgPS src={`https://m.media-amazon.com/images/I/71tN3vGsTIL.jpg`}
                             alt={"adblock"}/>
                </AdBlockPS>
                <div className="dealOfDay"></div>
                <MobProductCarousel productData={greatIndianFestival}/>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[4])}/>
                <MobProductCarousel productData={budgetFriendly}/>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[5])}/>
                <MobProductCarousel productData={seasonalProduct}/>
                <Collection collectionData={collectionData(COLLECTION_DATA, collectionGroup[6])}/>
                <AdBlockPS>
                    <AdImgPS src={`https://m.media-amazon.com/images/I/61TIS2jbrWL.jpg`}
                             alt={"adblock"}/>
                </AdBlockPS>
            </MobPageContentPS>
            <Footer/>
        </PageContentContainerPS>
    );
}

export default HomePage;