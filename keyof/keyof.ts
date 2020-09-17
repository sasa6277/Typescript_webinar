import { HasEmail, HasPhoneNumber } from "../basic type/basic";

/**
 * (1) MAPPED TYPES allow the use of an interface to transform keys into values
 */

interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K] // 💡turning key into value -- a *mapped type*
) {
  //...
}
contact("email", { name: "foo", email: "mike@example.com" });
contact("phone", { name: "foo", phone: 3213332222 });
contact("fax", { fax: 1231 });


// // we can get all values by mapping through all keys
// type AllCommKeys = keyof CommunicationMethods;
// type AllCommValues = CommunicationMethods[keyof CommunicationMethods];