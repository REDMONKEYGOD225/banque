// Obtenez une référence aux éléments de l'interface utilisateur nécessaires
var operationInput = document.getElementById('operation');
var accountNumberInput = document.getElementById('accountNumber');
var fullNameInput = document.getElementById('fullName');
var firstNameInput = document.getElementById('firstName');
var amountInput = document.getElementById('amount');
var outputDiv = document.getElementById('output');

// Ajoutez un écouteur d'événement pour le formulaire
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  var operation = operationInput.value;

  if (operation === '1') {
    // La création d'un nouveau compte
    var fullName = fullNameInput.value;
    var firstName = firstNameInput.value;
    
    // Effectuez les étapes nécessaires pour créer un nouveau compte
    
    // Affichez le numéro du compte créé à l'utilisateur
    outputDiv.innerHTML = 'Le compte a été créé avec succès. Le numéro du compte est XYZ1234567890.';
  } else if (operation === '2') {
    // La liste des comptes enregistrés
    
    // Obtenez les informations sur les comptes enregistrés
    
    // Affichez les informations sur les comptes à l'utilisateur
    outputDiv.innerHTML = 'Liste des comptes enregistrés : ...';
  } else if (operation === '3') {
    // Consultation de solde
    var accountNumber = accountNumberInput.value;
    
    // Vérifiez si le numéro de compte existe
    
    // Obtenez le solde du compte et affichez-le à l'utilisateur
    outputDiv.innerHTML = 'Le solde du compte XYZ1234567890 est de 1000 €.';
  } else if (operation === '4') {
    // Opération de dépôt
    var accountNumber = accountNumberInput.value;
    var amount = amountInput.value;
    
    // Vérifiez si le numéro de compte existe
    
    // Effectuez l'opération de dépôt et obtenez le nouveau solde
    
    // Affichez le récapitulatif de l'opération et le nouveau solde à l'utilisateur
    outputDiv.innerHTML = 'Dépôt de 500 € effectué avec succès sur le compte XYZ1234567890. Le nouveau solde est de 1500 €.';
  } else if (operation === '5') {
    // Opération de retrait
    var accountNumber = accountNumberInput.value;
    var amount = amountInput.value;
    
    // Vérifiez si le numéro de compte existe
    
    // Effectuez l'opération de retrait et obtenez le nouveau solde
    
    // Affichez le récapitulatif de l'opération et le nouveau solde à l'utilisateur
    outputDiv.innerHTML = 'Retrait de 200 € effectué avec succès sur le compte XYZ1234567890. Le nouveau solde est de 800 €.';
  } else {
    outputDiv.innerHTML = 'Opération invalide. Veuillez choisir une opération valide.';
  }
});
