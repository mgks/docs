---
title: 'Payment Gateway'
description: 'Integrating native payment SDKs.'
icon: 'credit-card'
---

This plugin aims to facilitate integration with native payment gateway SDKs (e.g., Stripe, PayPal, Google Pay, Apple Pay) for smoother in-app purchases that originate from the web content. (Planned for v8)

<Tabs>
 <Tab title="Android">
    <Info>
    Detailed documentation for an Android Payment Gateway Plugin, covering SDK integration (Gradle dependencies, Manifest), initiating payment flows (e.g., Google Pay API, Stripe SDK), handling results (`onActivityResult` or newer APIs), security considerations, and communication back to the WebView, will be added here soon. This often involves significant native implementation.
    </Info>
 </Tab>
 <Tab title="iOS">
    <Info>
    Detailed documentation for an iOS Payment Gateway Plugin, covering SDK integration (CocoaPods/SPM), initiating payment flows (e.g., Apple Pay via PassKit, Stripe SDK), handling delegate callbacks or completion handlers, security, and communication back to the WebView, will be added here soon. This often involves significant native implementation.
    </Info>
 </Tab>
</Tabs>