import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Users } from '../../entities/Users';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values([
        {
          id: 1,
          email: 'yohan@yohanpro.com',
          nickname: 'John',
          password: 'abcde',
        },
        {
          id: 2,
          email: 'example@example.com',
          nickname: 'Solid',
          password: '1q2w3e4r',
        },
      ])
      .execute();
  }
}
