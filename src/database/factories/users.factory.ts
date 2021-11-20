import Faker from 'faker';
import { Users } from '../../entities/Users';
import { define } from 'typeorm-seeding';

define(Users, (faker: typeof Faker) => {
  const id = faker.random.number();
  const nickname = faker.name.firstName();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();
  const activeStatus = 1;
  const verifiedUser = true;
  const userPicture = faker.image.avatar();

  const user = new Users();
  user.id = id;
  user.nickname = nickname;
  user.email = email;
  user.phone = phone;
  user.activeStatus = activeStatus;
  user.verifiedUser = verifiedUser;
  user.userPicture = userPicture;

  return user;
});
