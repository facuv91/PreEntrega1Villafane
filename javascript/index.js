alert("Bienvenido, aqui podrá solicitar su préstamo y calcular su capacidad de pago. Utilice MAYUSCULA para responder")
alert("Limites por lineas de préstamos: Destinos varios, hasta $2.000.000 y 60 cuotas, Bienes Muebles hasta $7.000.000 y 24 cuotas, Bienes Inmuebles hasta $30.000.000, minimo 120 cuotas hasta 360")
let destino = prompt("Elija la opcion que corresponda respecto al destino del préstamo: UNO - Destinos Varios, DOS - Adquisicion de bienes muebles, TRES Adquisicion de bienenes inmuebles.")
let monto = parseInt(prompt("Ingrese el monto del préstamo a solicitar:"))
let cuotas = parseInt(prompt("ingrese el la cantidad de cuotas en que desea pagarlo:"))
let eleccion = prompt("¿Desea calcular la afectacion de sus ingresos?  Responda SI o NO")

function calculoCoutaCapital (mon,cuo){
    capital = mon/cuo;
} 

function calculoInteres (mon){
    switch (destino){
        case "UNO":{
            let tasa=80;
            interes = (((mon/100)*tasa)/365)*30;
        }
        case "DOS":{
            let tasa=70;
            interes = (((mon/100)*tasa)/365)*30;
        }
        case "TRES":{
            let tasa=18;
            interes = (((mon/100)*tasa)/365)*30;
        }
        break;
    }
}

function calculoIva(int){
    iva = int*0.21;
}

function calculoCuotaMensual(cap,int,iva){
    cuotaMensual=cap+int+iva;
}

function acuerdo (mon,cap,int,iva,ctaMen,cta){
    console.log("Acordado" +" "+"$"+mon);
    switch (destino){
        case "UNO":{
            let tasa=80;
            console.log("TNA "+tasa+"%");
        }
        break;
        case "DOS":{
            let tasa=70;
            console.log("TNA "+tasa+"%");
        }
        break;
        case "TRES":{
            let tasa=18;
            console.log("TNA "+tasa+"%");
        }
        break;
    }    
    console.log("Capital a abonar"+" "+"$"+cap);
    console.log("Interes a abonar por cuota"+" "+"$"+int);
    console.log("Iva="+" "+"$"+iva);
    console.log("Cuota total mensual"+" "+"$"+ctaMen);
    console.log("A pagar en"+" "+cta+" "+"cuotas mensuales, iguales y consecutivas");    
}

switch (destino){
    case"UNO": if (monto<=2000000 && cuotas<=60){
        calculoCoutaCapital (monto,cuotas);
        calculoInteres(monto);   
        calculoIva(interes);
        calculoCuotaMensual(capital, interes, iva);
        acuerdo (monto,capital,interes,iva,cuotaMensual,cuotas);
    }
    break;
    case "DOS": if (monto<=7000000 && cuotas<=24){
        calculoCoutaCapital (monto,cuotas);
        calculoInteres(monto);   
        calculoIva(interes);
        calculoCuotaMensual(capital, interes, iva);
        acuerdo (monto,capital,interes,iva,cuotaMensual,cuotas);
    }
    break;
    case"TRES": if (monto<=30000000 && cuotas>=120 && cuotas<=360){
        calculoCoutaCapital (monto,cuotas);
        calculoInteres(monto);   
        calculoIva(interes);
        calculoCuotaMensual(capital, interes, iva);
        acuerdo (monto,capital,interes,iva,cuotaMensual,cuotas);
    }
    break;
    default:
        console.log("Datos invalidos");
}
switch (eleccion){
    case "SI":  let haberes = prompt("Trabaja en Relacion de depencia? SI o NO");
                switch (haberes){
                    case "SI":
                        alert("A continuacion ingrese los ultimos 3 sueldos netos");
                        let sueldo1 = parseInt(prompt("Ultimo sueldo"));
                        let sueldo2 = parseInt(prompt("Penultimo sueldo"));
                        let sueldo3 = parseInt(prompt("Antepenultimo sueldo"));
                        let afectacion = (((sueldo1+sueldo2+sueldo3)/3)/100)*35;
                        console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion);
                    break;
                    case "NO":
                    let independiente = prompt("Trabaja de manera independiente? SI O NO");
                    switch (independiente){
                        case "SI":{
                            let afip = prompt("En caso de ser responsable inscripto escriba SI,  de lo contrario escriba NO");
                            switch (afip){
                                case "SI":{
                                    let liquidacionAnual = parseInt(prompt("Ingrese el monto de su liquidacion anual"));
                                    let afectacion = ((liquidacionAnual/12)/100)*35;
                                    console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion);                
                                }break;
                                case "NO":{
                                let monotributista = prompt("Escriba su categoria de Monotributista");
                                    switch (monotributista){
                                        case "A":{
                                            let afectacion = (((1400000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion);
                                        }break;
                                        case "B":{
                                            let afectacion = (((2100000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion);
                                        }break;
                                        case "C":{
                                            let afectacion2 = (((2900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion2);
                                        }break;
                                        case "D":{
                                            let afectacion3 = (((3600000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion3);
                                        }break;
                                        case "E":{
                                            let afectacion4 = (((4300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion4);
                                        }break;
                                        case "F":{
                                            let afectacion5 = (((5300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion5);
                                        }break;
                                        case "G":{
                                            let afectacion6 = (((6400000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion6);
                                        }break;
                                        case "H":{
                                            let afectacion7 = (((7900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion7); 
                                        }break;
                                        case "I":{
                                            let afectacion8 = (((8900000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion8); 
                                        }break;
                                        case "J":{
                                            let afectacion9 = (((10200000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion9);
                                        }break;
                                        case "K":{
                                            let afectacion10 = (((11300000/12))/100)*35;
                                            console.log("La cuota que usted puede abonar es de"+" "+"$"+afectacion10); 
                                        }break;
                                    }
                                }break;            
                        case "NO":{            
                            alert("usted no posee ingresos que puedan ser analizados, muchas gracias por su visita");
                        }break;
                        }
                    }
                }
            }break;
    case "NO":{ 
            alert("Muchas gracias por su visita");
    }break;
}





// 1 - Sola firma, TNA 80%, MONTO MAXIMO $2.000.000, Hasta 60 meses. mensuales.-
// 2 - Prendario, TNA 70%, MONTO MAXIMO $7.000.000, Hasta 24 meses, mensuales-
// 3 - Hipotecario, TNA 18%, MONTO MAXIMO $30.000.000, Desde 120, hasta 360 meses, mensuales.-
// calcular el IVA 21% sobre los intereses.-
// calcular la afectacion de los ingresos, LA CUOTA NO PUEDE SER MAYOR AL 35% DE SUS INGRESOS MENSUALES-
// Elegir entre trabajador autonomo o en relacion de dependencia.-
// Ingresar los ultimos 3 salarios netos.-
// Elegir entre Monotributista o Responsable Inscripto.-
// Seleccion la CAtegoria del Monotributo: A,B,C,D,E,F,G,H,I,J,K.-
// Ingresar Liquidacion anual de impuesto a las ganacias F-711.-
// 

