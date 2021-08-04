// 1

function getWordEnding(num, words) {
  const remainder10 = num % 10;
  const remainder100 = num % 100;
  if (remainder100 > 10 && remainder100 < 20) return words[2];
  else if (remainder10 === 1) return words[0];
  else if (remainder10 > 1 && remainder10 < 5) return words[1];
  else return words[2];
}
const num = 1;
const words = ["Джамшут", " Джамшута", "Джамшутов"];
for (let i = 0; i <= 1021; i++) {
  console.log(i, getWordEnding(i, words));git 
};


// 2   
function createPerson(name, age, hobbies, city) {
  return {
    name,
    age,
    hobbies,
    city,
  };
};

const enrique = createPerson(
  "Энрике",
  30,
  ["пробежки по утрам", "свежевыжатый сок"],
  "Лондон"
);
const sarah = createPerson(
  "Сара",
  26,
  ["смотреть сериалы", "пишет довольно неплохие статьи в местную газету"],
  "Лондон"
);

const ann = createPerson(
  "Энн",
  4,
  ["рисовать мелками", "играть с соседским мальчиком в песочнице"],
  "Лондон"
);

const jim = createPerson(
  "Джим",
  60,
  ["путешествовать по родной Англии"],
  "Лондон"
);

const kelly = createPerson(
  "Келли",
  60,
  ["путешествовать по родной Англии"],
  "Лондон"
);

const momEnrique = createPerson(
  "Мама Энрике",
  65,
  "Ливерпуль"
);

const nikolay = createPerson(
  "Николай",
  70,
  ["играет первой скрипкой в Ливерпульском аркестре"],
  "Ливерпуль"
);

const parents = [sarah, enrique];
const grandParents = [jim, kelly, momEnrique];
const family = [nikolay, momEnrique, jim, kelly, sarah, ann, enrique];

Object.assign(sarah, { husbund: enrique }, [{ daughter: ann }], { mom: kelly }, { dad: jim });

Object.assign(nikolay, { wife: momEnrique }, { stepson: enrique });
Object.assign(momEnrique, { husbund: nikolay }, { son: enrique }, { daughterInLaw: sarah }, { grandDaughter: ann });
Object.assign(jim, { daughter: sarah }, { sonInLaw: enrique }, { wife: kelly }, { grandDaughter: ann });
Object.assign(kelly, { daughter: sarah }, { husbund: jim }, { sonInLaw: enrique }, { grandDaughter: ann });
Object.assign(ann, { parents: parents }, { grandParents: grandParents });
Object.assign(enrique, { wife: sarah }, { daughter: ann }, { mom: momEnrique }, { stepfather: nikolay })

console.log(family);
