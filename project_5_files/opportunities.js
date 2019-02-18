class Opportunity{
  constructor(org_name, location, date, description){
    this.org_name = org_name;
    this.location = location;
    this.date = date;
    this.description = description;
  }
  get org_name(){
    return this.org_name;
  }
  
  get location(){
    return this.location;
  }
  
  get date(){
    return this.date;
  }
  
  get description(){
    return this.description;
  }
  
  change_description(description){
    this.description = description;
}

var opportunities = [new Opportunity("American Red Cross", "Chicago", "March 1", "Blood Drive: Donors needed"),
                     new Opportunity("Northwestern Dance Marathon", "Evanston", "April 10", "Raise money and Dance!"),
                     new Opportunity("ETHS Mentoring", "Evanston", "February 20th", "Come be a role model for Evanston kids")
                    ]

    
