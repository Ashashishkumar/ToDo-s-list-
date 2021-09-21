const express = require('express');
const bodyParser = require("body-parser");
const app = express();
var items=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get('/', (req, res) => {
    var today = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day=today.toLocaleDateString(undefined, options);
       res.render("list" ,{kindOfDay:day ,newListItem:items}); 
        });

       app.post('/', function (req, res) {
      var  item= req.body.newItem;
      items.push(item)
        res.redirect('/')
            });


        app.listen(3000,function(){
          console.log("server started on port")
        });

      
        //By using switch Statment having all day of weekend

 /*
        switch (currentDate) {
          case 0:
            day="sunday"
            break;
            case 1:
              day="Monday"
              break;
              case 2:
                day="Tuesday"
                break;
                case 3:
                  day="Wednesday"
                  break;
                  case 4:
                    day="Thrusday"
                    break;
                    case 5:
                      day="Friday"
                      break;
                      case 6:
                        day="Saturday"
                        break;
                        default:
                          console.log("Error ")
            break;
        }
        res.render("list" ,{kindOfDay:day});
        */


