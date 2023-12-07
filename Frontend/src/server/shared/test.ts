import { Entity, Fields } from "remult";

@Entity('test',{
    allowApiCrud : true
})

export class product_data{
    @Fields.autoIncrement()
    id = 0;
    @Fields.string()
    product_name = '';
    @Fields.string()
    product_price = '';
    
}