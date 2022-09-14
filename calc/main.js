let exchange = prompt('What is Bitcoin price today?', '');
let money = prompt('How much $ do you have?', '');
let result = money / exchange

alert(`You can buy ${result.toFixed(3)}`);


