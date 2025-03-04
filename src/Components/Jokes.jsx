// export default function Joke(props){
//     return(
//         <div>
//           <p>Here's a joke </p>
//           <p>{props.setup}</p>            
//           <p>{props.punchline}</p>
//            <hr/>
//         </div>
//     )
// }



// import Joke from '/joke.jsx'

// export default function App() {
//     return (
//         <>
//             <Joke
//             setup=" I got my daughter a fridge for her birthday. "
//             punchline="I can't wait to see her face light up when she opens it."
//             />
            
//             <Joke
//             setup=" How did the hacker escape the police? "
//             punchline="He just ransomware!"
//             />
            
//             <Joke
//             setup="Why don't pirates travel on mountain roads? "
//             punchline="Scurvy."
//             />
            
//             <Joke
//             setup="Why do bees stay in the hive in the winter? "
//             punchline="Swarm."
//             />
            
//             <Joke
//             setup="What's the best thing about Switzerland? "
//             punchline="I don't know, but the flag is a big plus!"
//             />
            
//             <Joke
//             punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//             />
        
//         </>
//     )
// }


const nums = [1,2,3,4,5]   //get squares
const square = nums.map((num) => (num*num))
console.log(square)

const names = ["alice", "bob", "charlie", "danielle"]   //get captilazised
const captilazised = names.map((name) => name[0].toUpperCase() + name.slice(1))
console.log(captilazised)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]   //get wrapped in ptag
const paragraphs = pokemon.map((mon) => `<p>${mon}</p>`)
console.log(paragraphs)