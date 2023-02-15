import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder} from '@angular/forms'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '066_formReactive';

form: FormGroup;

  constructor(private fctrl:FormBuilder){
      this.form = this.fctrl.group({
        codigo:"",
        nombre:"",
        aficiones: fctrl.group({
          aficion1:"",
         aficion2:""
        })
        
      })
     
    }


    ngOnInit(): void {
      
    }
    
    onSubmit(){
      console.log("codigo , "+ this.form.controls['codigo'].value);
      console.log("nombre , "+ this.form.controls['nombre'].value);
      console.log("aficiones " + JSON.stringify(this.form.controls['aficiones'].value))

      //console.log("aficion1 , "+ this.form.controls['aficion1'].value);
      //console.log("aficion2 , "+ this.form.controls['aficion2'].value);
      console.log(JSON.stringify(this.form.value));
    }

}
