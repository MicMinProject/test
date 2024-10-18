import _ from 'lodash'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  // Uzywajac `react` oraz `lodash` wez liste userow z `id` oraz `name` i pozwol uzytkownikowi wykonac nastepujace akcje poprzez dedykowane przyciski (1 przycisk na 1 akcje):
  // ​
  // 1. Posortuj liste imionami od A do Z.
  // 2. Posortuj liste imionami od Z do A.
  // 3. Losowo przetasuj liste userow.
  // 4. Pokaz jedynie unikatowych userow.
  // 5. Pokaz jedynie pierwszego usera.
  // 6. Pokaz jedynie ostatniego usera.
  // ​
  // W zadaniu musisz wykorzystac kazda z nastepujacych funkcji, ktore znajdziesz w `lodash`:
  // ​
  // - "sortBy", "reverse", "shuffle", "uniq", "head", "last"

  const users = [
    // [id, name]
    [1, "Cubitus"],
    [5, "Scooby"],
    [2, "Dogmatix"],
    [4, "Snoopy"],
    [3, "Hobbes"],
    [4, "Snoopy"],
    [3, "Hobbes"],
  ];
 
  const sortBy = _.sortBy(users, (([id, name])=> name))  //destrukturyzacja
  //obiekt literalny , Map

  // console.log(_.reverse(sortBy))

  // console.log(_.shuffle(users))
  
  // const stringifiedUsers = users.map(user => JSON.stringify(user))

  // console.log(stringifiedUsers)

  // const uniqueStringifiedUsers = _.uniq(stringifiedUsers)

  // const uniqueParsedUsers = uniqueStringifiedUsers.map(user => JSON.parse(user))

  // console.log(uniqueParsedUsers)

  // console.log(_.head(users))
  
  // console.log(_.last(users))

  return (
    <div>
    
    </div>
    
  )
}

      export default App
      