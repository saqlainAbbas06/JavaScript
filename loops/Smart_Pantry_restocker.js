// User Stories:

// You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.

// Duplicate sku values in the shipment should be ignored.
// When the zone segment is not provided, it should default to "general".
// The qty value should be converted to a number.
// You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.

// The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).

// If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
// Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
// Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
// You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.

// You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

// You should use all of the functions together to process a shipment and log the final grouped result object to the console.

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];
function parseShipment(rawData) {
  const shipment = [];
  const seenSkus = [];

  for (const row of rawData) {
    const splitStr = row.split("|");
    const sku = splitStr[0];

    if (seenSkus.includes(sku)) {
      continue;
    }

    seenSkus.push(sku);

    const item = {
      sku: splitStr[0],
      name: splitStr[1],
      qty: Number(splitStr[2]),
      expires: splitStr[3],
      zone: splitStr[4] || "general"
    };

    shipment.push(item);
  }

  return shipment;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else {
      let exists = false;

      for (const pantryItem of pantry) {
        if (pantryItem.sku === item.sku) {
          exists = true;
          break;
        }
      }

      if (exists) {
        type = "restock";
      } else {
        type = "donate";
      }
    }

    actions.push({
      type: type,
      item: item
    });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const copy = [];

  for (const item of pantry) {
    copy.push({ ...item });
  }

  return copy;
}

const shipment = parseShipment(rawData);
const copiedPantry = clonePantry(pantry);
const actions = planRestock(copiedPantry, shipment);
const result = groupByZone(actions);

console.log(result);
