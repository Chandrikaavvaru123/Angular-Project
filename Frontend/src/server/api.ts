import {remultExpress} from 'remult/remult-express';
import { product_data } from './shared/test';

export const api = remultExpress({
    entities : [product_data]
});