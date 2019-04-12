"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Bryan vargas
   Date:   04/11/19
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();

      //calculate the cost of order (call function)
      calcOrder();
});

function calcOrder() {
      var orderForm = document.forms.orderForm;

      //calculate the initial cost of the order
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      //initial cost = model x quantity
      var initialCost = mCost * quantity;
      orderForm.elements.initialCost.value = initialCost;

      //retrieve thecost of the users protection plan.
      var pCost = document.querySelector('input[name="protection"]:checked').value * quantity;
      orderForm.elements.protectionCost.value = pCost;

      //calculate the order subtotal
      orderForm.elements.subtotal.value = initialCost + pCost;

      //calculate the sales tax
      var salesTax = 0.05 * (initialCost + pCost);
      orderForm.elements.salesTax.value = salesTax;

      //calculate the total cost of the total order
      var totalCost = initialCost + pCost + salesTax;
      orderForm.elements.totalCost.value = totalCost;
}