// Ponte com o Android: so age quando o app roda dentro do APK.
if (window.AndroidBridge) {
    window.print = function () { window.AndroidBridge.print(); };
}
