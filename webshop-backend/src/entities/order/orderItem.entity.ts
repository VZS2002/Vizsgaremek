import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Product, (product) => product.orderItems)
  product: Product;

  @ManyToOne(() => User, (user) => user.orderItems)
  user: User;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
}
