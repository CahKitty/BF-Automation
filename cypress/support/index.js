import { faker } from "@faker-js/faker";
const data = {
  id_name: faker.internet.userName(),
  id_number: faker.number.int({ max: 10000 }),
  enterprise_name: faker.internet.userName(),
  journey_name: "PRÉ-VENDA"
}
export {data}