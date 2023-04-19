function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // "ou"
    const comprarTv50 = trabalho1 && trabalho2 // "E"
    // const comprarTv32 = !!(trabalho1 ^trbalho2) // bitwise xor  ("ou esclusivo")
    const comprarTv32 = trabalho1 != trabalho2 // xor alternativo ("ou esclusivo")
    const manterSaudavel = !comprarSorvete // operador unário 
    
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/* v e v -> v
   v e f -> f 
   v e ? -> f
   
   v ou ? -> v
   f ou v -> v
   f ou f -> f 
   
   v xor v -> f
   v xor f -> v
   f xor v -> v 
   f xor f -> f
   
   !v -> f
   !f -> f
*/