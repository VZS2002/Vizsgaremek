import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/user/address.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user/user.entity';
import { Product } from './entities/product/product.entity';
import { Category } from './entities/product/category.entity';
import { Size } from './entities/product/size.entity';
import { Stock } from './entities/product/stock.entity';
import { Price } from './entities/product/price.entity';
import { ShoppingCart } from './entities/cart/shoppingCart.entity';
import { ShoppingCartItem } from './entities/cart/shoppingCartItem.entity';
import { Order } from './entities/order/order.entity';
import { PaymentMethod } from './entities/order/paymentMethod.entity';
import { ShippingMethod } from './entities/order/shippingMethod.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'webshop',
      entities: [
        User,
        Address,
        Product,
        Category,
        Size,
        Stock,
        Price,
        ShoppingCart,
        ShoppingCartItem,
        Order,
        PaymentMethod,
        ShippingMethod,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
