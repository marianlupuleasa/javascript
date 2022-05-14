const app = Vue.createApp({
    methods: {
        calculate: function()
        {
            var input = document.getElementsByName('array[]');
            var classes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
            var modulo = [];
                
            // store data in classes array
            for (var i = 0; i < input.length; i++) 
            {

                if (input[i].value > classes[Math.floor(input[i].value / 100 - 1)]){
                    classes[Math.floor(input[i].value / 100 - 1)] = input[i].value;
                }

            }
            
            // remove 0 fields from array
            var content = "Maximele din clase: ["
            for (var i = 0; i < classes.length; i++)
            {
                if(classes[i] == 0){
                    classes.splice(i,1);
                    i--;
                }
            }

            // add values from classes to content
            content += classes + "] <br> Modulo: [";

            // store data in modulo array
            for (var i = 0; i < classes.length; i++) 
            {
                modulo[i] = JSON.stringify(String.fromCharCode(65 + classes[i] % 26));
            }

            // add values from modulo to content
            content += modulo + "]";
            
            // print content
            document.getElementById('display').innerHTML = content;
            return document;
        }
    }
})

app.mount('#app');
