import dayjs from "dayjs"
const Day = () => {    
   
    let datas = [
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 16,
            reservation: 1,
            receiveNo: '1650873058369',
            receiver: null,
            carNumber: '003테0425',
            carType: 0,
            carBrand: '현대',
            carModel: 'i30',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-25T13:00:00.000Z',
            arrivedDatetime: '2022-04-26T20:05:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-25T07:50:58.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '프리미엄',
            statusNm: '차량접수',
            maskingPhone: '01097680922',
            areaNm: 'H구역',
            uid: 15,
            reservation: 0,
            receiveNo: '1650866189912',
            receiver: 'dev',
            carNumber: '002테0425',
            carType: 0,
            carBrand: '현대',
            carModel: '아토스',
            valetType: 1,
            status: 1,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: 1,
            keyStore: 0,
            photos: [],
            memo: null,
            userRequest: null,
            airPlaneNumber: null,
            valetTerm: null,
            useDatetime: '2022-04-25T05:56:29.000Z',
            arrivedDatetime: '2022-04-29T15:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-25T05:56:29.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 13,
            reservation: 1,
            receiveNo: '1650608261096',
            receiver: null,
            carNumber: '001테0422',
            carType: 0,
            carBrand: '현대',
            carModel: 'i40',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-23T15:00:00.000Z',
            arrivedDatetime: '2022-04-28T17:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-22T06:17:41.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 13,
            reservation: 1,
            receiveNo: '1650608261096',
            receiver: null,
            carNumber: '001테0422',
            carType: 0,
            carBrand: '현대',
            carModel: 'i40',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-23T15:00:00.000Z',
            arrivedDatetime: '2022-04-28T17:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-22T06:17:41.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 13,
            reservation: 1,
            receiveNo: '1650608261096',
            receiver: null,
            carNumber: '001테0422',
            carType: 0,
            carBrand: '현대',
            carModel: 'i40',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-23T15:00:00.000Z',
            arrivedDatetime: '2022-04-23T17:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-22T06:17:41.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 13,
            reservation: 1,
            receiveNo: '1650608261096',
            receiver: null,
            carNumber: '001테0422',
            carType: 0,
            carBrand: '현대',
            carModel: 'i40',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-26T15:00:00.000Z',
            arrivedDatetime: '2022-04-29T17:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-22T06:17:41.000Z',
        },
        {
            carTypeNm: '일반',
            valetTypeNm: '일반',
            statusNm: '예약접수',
            maskingPhone: '01097680922',
            areaNm: null,
            uid: 13,
            reservation: 1,
            receiveNo: '1650608261096',
            receiver: null,
            carNumber: '001테0422',
            carType: 0,
            carBrand: '현대',
            carModel: 'i40',
            valetType: 0,
            status: 0,
            phone: '9WSc6RkTK4RHRGD/BnAl2Q==',
            area: null,
            keyStore: null,
            photos: [],
            memo: null,
            userRequest: '',
            airPlaneNumber: '',
            valetTerm: null,
            useDatetime: '2022-04-29T15:00:00.000Z',
            arrivedDatetime: '2022-04-24T17:00:00.000Z',
            cancelDatetime: null,
            createdAt: '2022-04-22T06:17:41.000Z',
        }
    ]            
    
    function createDay(date){
        let a = dayjs(date);
        let arr = [a.year(), a.month()+1, a.date()-1];
        let result = []
        
        for(let day of arr){
            let tmp = "";
            if(day<10) tmp = String(0)+String(day); 
            else tmp = String(day);
            result.push(tmp);
        }
        return result.join("-");

    }
    
    function classification2(data){
        let In = createDay(data["useDatetime"]);       
        let out = createDay(data["arrivedDatetime"]);
        let status1 = "dateFalse";
        let status2 = "outFalse";
        newArray.map((v) => {
          if (v.id === In) {
            if(v.inCar){
                v.inCar = v.inCar + 1;
                status1 = "dateTrue";
            }else{
                v.inCar = 1;
                status1 = "dateTrue";
            }
            
          } 
          if(v.id === out) {
              if(v.outCar){
                v.outCar = v.outCar + 1;
                status2 = "outTrue";
              }else {
                  v.outCar = 1;
                  status2 = "outTrue";
              }            
          }
        });
        if(status1 === "dateFalse"){
            let tmp = new Object();
            tmp.id = In;
            tmp.inCar = 1;
            newArray = [...newArray, tmp];
        }
        if(status2 === "outFalse"){
            let tmp = new Object();
            tmp.id = out;
            tmp.outCar = 1;
            newArray = [...newArray, tmp];
        }
    }
    
    let newArray = [];
    
    for(let data of datas){        
        classification2(data);
    }
    console.log(newArray);
    
    // function classification2(data){
    //     let In = createDay(data["useDatetime"]);       
    //     let out = createDay(data["arrivedDatetime"]);
    //     let status1 = "dateFalse";
    //     let status2 = "outFalse";
    //     newArray.map((v) => {
    //       if (v.get("id") === In) {
    //         if(v.get("inCar")){
    //             v.set("inCar", v.get("inCar") + 1);
    //             status1 = "dateTrue";
    //         }else{
    //             v.set("inCar", 1);
    //             status1 = "dateTrue";
    //         }
            
    //       } 
    //       if(v.get("id") === out) {
    //           if(v.get("outCar")){
    //             v.set("outCar" , v.get("outCar") + 1);
    //             status2 = "outTrue";
    //           }else {
    //               v.set("outCar", 1);
    //               status2 = "outTrue";
    //           }            
    //       }
    //     });
    //     if(status1 === "dateFalse"){
    //         let tmp = new Map();
    //         tmp.set("id", In);
    //         tmp.set("inCar", 1);
    //         newArray = [...newArray, tmp];
    //     }
    //     if(status2 === "outFalse"){
    //         let tmp = new Map();
    //         tmp.set("id", out);
    //         tmp.set("outCar", 1);
    //         newArray = [...newArray, tmp];
    //     }
    // }
    
    return <div></div>
}
export default Day