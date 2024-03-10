import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";

function WorkingWithFunctions() {
    console.log('Hello World!');
    
    return(
       <div>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
       </div>
    );
 }
 export default WorkingWithFunctions