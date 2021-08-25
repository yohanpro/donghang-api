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
          activeStatus: 1,
          phone: '01012345678',
          userPicture:
            'https://c8.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg',
        },
        {
          id: 2,
          email: 'example@example.com',
          nickname: 'Solid',
          activeStatus: 2,
          phone: '01012345678',
          userPicture:
            'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2lkZSUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        },
      ])
      .execute();
  }
}
