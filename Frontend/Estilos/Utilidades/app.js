paypal.Buttons({

  style: { 
    color: 'blue',
    shape: 'pill',
    label: 'pay'
  },

  createOrder: function(data, actions){
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.02'
        }
      }]
    });
  },

  onApprove : function(data, actions){
    actions.order.capture().then(function (detalles){
      alert("Pago Realizado");
    });
  },

  onCancel: function(data){
    alert("Pago Cancelado")
    console.log(data)
  }

}).render('#paypal-button-container')