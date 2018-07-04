import axios from 'axios';

class ItemService{

    static getItem(url){
       return axios.get(url); 
    }

    static deleteItem(url,id){
        let deleteUrl=url+"/"+id;
        console.log(url,"deelete ulr")
        return axios.delete(deleteUrl);
    }

    static addItem(url,data){
        return axios.post(url,data);
    }

};

export default ItemService;