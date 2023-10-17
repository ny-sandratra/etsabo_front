import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss']
})


export class DiagnosticComponent  {

   symptoms : SymptomInterface =

{
  "itching": 0,
  "skin_rash": 0,
  "nodal_skin_eruptions": 0,
  "continuous_sneezing": 0,
  "shivering": 0,
  "chills": 0,
  "joint_pain": 0,
  "stomach_pain": 0,
  "acidity": 0,
  "ulcers_on_tongue": 0,
  "muscle_wasting": 0,
  "vomiting": 0,
  "burning_micturition": 0,
  "spotting_": 0,
  "fatigue": 0,
  "weight_gain": 0,
  "anxiety": 0,
  "mood_swings": 0,
  "weight_loss": 0,
  "restlessness": 0,
  "lethargy": 0,
  "irregular_sugar_level": 0,
  "cough": 0,
  "high_fever": 0,
  "sunken_eyes": 0,
  "breathlessness": 0,
  "sweating": 0,
  "indigestion": 0,
  "headache": 0,
  "yellowish_skin": 0,
  "dark_urine": 0,
  "nausea": 0,
  "loss_of_appetite": 0,
  "pain_behind_the_eyes": 0,
  "back_pain": 0,
  "constipation": 0,
  "abdominal_pain": 0,
  "diarrhoea": 0,
  "mild_fever": 0,
  "yellow_urine": 0,
  "yellowing_of_eyes": 0,
  "acute_liver_failure": 0,
  "swelling_of_stomach": 0,
  "swelled_lymph_nodes": 0,
  "malaise": 0,
  "blurred_and_distorted_vision": 0,
  "phlegm": 0,
  "throat_irritation": 0,
  "chest_pain": 0,
  "weakness_in_limbs": 0,
  "fast_heart_rate": 0,
  "pain_during_bowel_movements": 0,
  "neck_pain": 0,
  "dizziness": 0,
  "cramps": 0,
  "obesity": 0,
  "knee_pain": 0,
  "muscle_weakness": 0,
  "stiff_neck": 0,
  "swelling_joints": 0,
  "movement_stiffness": 0,
  "spinning_movements": 0,
  "loss_of_balance": 0,
  "weakness_of_one_body_side": 0,
  "bladder_discomfort": 0,
  "passage_of_gases": 0,
  "toxic_look_": 0,
  "depression": 0,
  "irritability": 0,
  "muscle_pain": 0,
  "red_spots_over_body": 0,
  "family_history": 0,
  "mucoid_sputum": 0,
  "rusty_sputum": 0,
  "lack_of_concentration": 0,
  "visual_disturbances": 0,
  "blood_in_sputum": 0,
  "pus_filled_pimples": 0,
  "skin_peeling": 0,
  "blister": 0
};

  overlayVisible = false;
  loaderVisible = false;
  messageVisible = false;
  messageHTMLSafe : SafeHtml = this.sanitizeHtml('') ;
  messageDiv: string = '';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer){}


  sendRequest() { 
     
    try {
      this.symptoms["itching"] = this.symptoms["itching"] ? 1 : 0  ;
      this.symptoms["skin_rash"] = this.symptoms["skin_rash"] ? 1 : 0 ;
      this.symptoms["nodal_skin_eruptions"] = this.symptoms["nodal_skin_eruptions"] ? 1 : 0 ;
      this.symptoms["continuous_sneezing"] = this.symptoms["continuous_sneezing"] ? 1 : 0 ;
      this.symptoms["shivering"] = this.symptoms["shivering"] ? 1 : 0 ;
      this.symptoms["chills"] = this.symptoms["chills"] ? 1 : 0 ;
      this.symptoms["joint_pain"] = this.symptoms["joint_pain"] ? 1 : 0 ;
      this.symptoms["stomach_pain"] = this.symptoms["stomach_pain"] ? 1 : 0 ;
      this.symptoms["acidity"] = this.symptoms["acidity"] ? 1 : 0 ;
      this.symptoms["ulcers_on_tongue"] = this.symptoms["ulcers_on_tongue"] ? 1 : 0 ;
      this.symptoms["muscle_wasting"] = this.symptoms["muscle_wasting"] ? 1 : 0 ;
      this.symptoms["vomiting"] = this.symptoms["vomiting"] ? 1 : 0 ;
      this.symptoms["burning_micturition"] = this.symptoms["burning_micturition"]? 1 : 0 ;
      this.symptoms["spotting_"]= this.symptoms["spotting_"]? 1 : 0 ;
      this.symptoms["fatigue"] = this.symptoms["fatigue"] ? 1 : 0 ;
      this.symptoms["weight_gain"] = this.symptoms["weight_gain"] ? 1 : 0 ;
      this.symptoms["anxiety"] = this.symptoms["anxiety"] ? 1 : 0 ;
      this.symptoms["mood_swings"] = this.symptoms["mood_swings"] ? 1 : 0 ;
      this.symptoms["weight_loss"] = this.symptoms["weight_loss"] ? 1 : 0 ;
      this.symptoms["restlessness"] = this.symptoms["restlessness"] ? 1 : 0 ;
      this.symptoms["lethargy"] = this.symptoms["lethargy"] ? 1 : 0 ;
      this.symptoms["irregular_sugar_level"] = this.symptoms["irregular_sugar_level"] ? 1 : 0 ;
      this.symptoms["cough"] = this.symptoms["cough"] ? 1 : 0 ;
      this.symptoms["high_fever"] = this.symptoms["high_fever"] ? 1 : 0 ;
      this.symptoms["sunken_eyes"] = this.symptoms["sunken_eyes"] ? 1 : 0 ;
      this.symptoms["breathlessness"] = this.symptoms["breathlessness"] ? 1 : 0 ;
      this.symptoms["sweating"] = this.symptoms["sweating"] ? 1 : 0 ;
      this.symptoms["indigestion"] = this.symptoms["indigestion"] ? 1 : 0 ;
      this.symptoms["headache"] = this.symptoms["headache"] ? 1 : 0 ;
      this.symptoms["yellowish_skin"] = this.symptoms["yellowish_skin"] ? 1 : 0 ;
      this.symptoms["dark_urine"] = this.symptoms["dark_urine"] ? 1 : 0 ;
      this.symptoms["nausea"] = this.symptoms["nausea"] ? 1 : 0 ;
      this.symptoms["loss_of_appetite"] = this.symptoms["loss_of_appetite"] ? 1 : 0 ;
      this.symptoms["pain_behind_the_eyes"] = this.symptoms["pain_behind_the_eyes"] ? 1 : 0 ;
      this.symptoms["back_pain"] = this.symptoms["back_pain"] ? 1 : 0 ;
      this.symptoms["constipation"] = this.symptoms["constipation"] ? 1 : 0 ;
      this.symptoms["abdominal_pain"] = this.symptoms["abdominal_pain"] ? 1 : 0 ;
      this.symptoms["diarrhoea"] = this.symptoms["diarrhoea"] ? 1 : 0 ;
      this.symptoms["mild_fever"] = this.symptoms["mild_fever"] ? 1 : 0 ;
      this.symptoms["yellow_urine"] = this.symptoms["yellow_urine"] ? 1 : 0 ;
      this.symptoms["yellowing_of_eyes"] = this.symptoms["yellowing_of_eyes"] ? 1 : 0 ;
      this.symptoms["acute_liver_failure"] = this.symptoms["acute_liver_failure"] ? 1 : 0 ;
      this.symptoms["swelling_of_stomach"] = this.symptoms["swelling_of_stomach"] ? 1 : 0 ;
      this.symptoms["swelled_lymph_nodes"] = this.symptoms["swelled_lymph_nodes"] ? 1 : 0 ;
      this.symptoms["malaise"] = this.symptoms["malaise"] ? 1 : 0 ;
      this.symptoms["blurred_and_distorted_vision"] = this.symptoms["blurred_and_distorted_vision"] ? 1 : 0 ;
      this.symptoms["phlegm"] = this.symptoms["phlegm"] ? 1 : 0 ;
      this.symptoms["throat_irritation"] = this.symptoms["throat_irritation"] ? 1 : 0 ;
      this.symptoms["chest_pain"] = this.symptoms["chest_pain"] ? 1 : 0 ;
      this.symptoms["weakness_in_limbs"] = this.symptoms["weakness_in_limbs"] ? 1 : 0 ;
      this.symptoms["fast_heart_rate"] = this.symptoms["fast_heart_rate"] ? 1 : 0 ;
      this.symptoms["pain_during_bowel_movements"] = this.symptoms["pain_during_bowel_movements"] ? 1 : 0 ;
      this.symptoms["neck_pain"] = this.symptoms["neck_pain"] ? 1 : 0 ;
      this.symptoms["dizziness"] = this.symptoms["dizziness"] ? 1 : 0 ;
      this.symptoms["cramps"] = this.symptoms["cramps"] ? 1 : 0 ;
      this.symptoms["obesity"] = this.symptoms["obesity"] ? 1 : 0 ;
      this.symptoms["knee_pain"] = this.symptoms["knee_pain"] ? 1 : 0 ;
      this.symptoms["muscle_weakness"] = this.symptoms["muscle_weakness"] ? 1 : 0 ;
      this.symptoms["stiff_neck"] = this.symptoms["stiff_neck"] ? 1 : 0 ;
      this.symptoms["swelling_joints"] = this.symptoms["swelling_joints"] ? 1 : 0 ;
      this.symptoms["movement_stiffness"] = this.symptoms["movement_stiffness"] ? 1 : 0 ;
      this.symptoms["spinning_movements"] = this.symptoms["spinning_movements"] ? 1 : 0 ;
      this.symptoms["loss_of_balance"] = this.symptoms["loss_of_balance"] ? 1 : 0 ;
      this.symptoms["weakness_of_one_body_side"] = this.symptoms["weakness_of_one_body_side"] ? 1 : 0 ;
      this.symptoms["bladder_discomfort"] = this.symptoms["bladder_discomfort"] ? 1 : 0 ;
      this.symptoms["passage_of_gases"] = this.symptoms["passage_of_gases"] ? 1 : 0 ;
      this.symptoms["toxic_look_"] = this.symptoms["toxic_look_"] ? 1 : 0 ;
      this.symptoms["depression"] = this.symptoms["depression"] ? 1 : 0 ;
      this.symptoms["irritability"] = this.symptoms["irritability"] ? 1 : 0 ;
      this.symptoms["muscle_pain"] = this.symptoms["muscle_pain"] ? 1 : 0 ;
      this.symptoms["red_spots_over_body"] = this.symptoms["red_spots_over_body"] ? 1 : 0 ;
      this.symptoms["family_history"] = this.symptoms["family_history"] ? 1 : 0 ;
      this.symptoms["mucoid_sputum"] = this.symptoms["mucoid_sputum"] ? 1 : 0 ;
      this.symptoms["rusty_sputum"] = this.symptoms["rusty_sputum"] ? 1 : 0 ;
      this.symptoms["lack_of_concentration"] = this.symptoms["lack_of_concentration"] ? 1 : 0 ;
      this.symptoms["visual_disturbances"] = this.symptoms["visual_disturbances"] ? 1 : 0 ;
      this.symptoms["blood_in_sputum"] = this.symptoms["blood_in_sputum"] ? 1 : 0 ;
      this.symptoms["pus_filled_pimples"] = this.symptoms["pus_filled_pimples"] ? 1 : 0 ;
      this.symptoms["skin_peeling"] = this.symptoms["skin_peeling"] ? 1 : 0 ;
      this.symptoms["blister"] = this.symptoms["blister"] ? 1 : 0 ;
    

      const symptomsJSON = JSON.stringify(this.symptoms);

      // console.log(this.symptoms)
      // console.log(symptomsJSON)
      const url = "http://localhost:4557/symptoscan/";
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.overlayVisible = true;
      this.loaderVisible = true;
      

      this.http.post(url,symptomsJSON,options)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.loaderVisible = false;
          this.messageVisible = true;
          this.messageDiv =` 
              <div>
                <p class="notification">Maladie : ${data.disease} <br> Probabilité: ${data.confidence} </p>
              </div>
              <button id="close" (click)="closeButton()" > Ok </button>
                    ` ;
          this.messageHTMLSafe = this.sanitizeHtml(this.messageDiv);
        },
        (error: any) => {
          console.log(error);
          this.loaderVisible = false;
          this.messageVisible = true;
          this.messageDiv = `<p>Erreur lors de la récupération des données.</p>` + error;
          this.messageHTMLSafe = this.sanitizeHtml(this.messageDiv);
        }
      );
      
    }
    
    catch(error){
      console.error("Une erreur s'est produite :"+ error)
    }
  }


    closeButton(){
      this.overlayVisible = false;
    }
      

    sanitizeHtml(html: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    
  

}
export interface SymptomInterface {
  [cle: string]: number;
}