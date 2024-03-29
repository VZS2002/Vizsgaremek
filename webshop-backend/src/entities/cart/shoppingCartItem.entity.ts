import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, (product) => product.cartItems)
  product: Product;

  @ManyToOne(() => User, (user) => user.cartItems)
  user: User;
}
