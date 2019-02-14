export default function (amount, currency = '$') {
  return `${currency}${amount.toFixed(2)}`;
}
