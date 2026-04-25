import React from 'react';
import { Mail, Shield, ChevronUp } from 'lucide-react';

const PrivacyPolicy = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8 text-[#cd1d1d]" />
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm tracking-[3px] text-gray-400 uppercase mb-3">
                        Legal Agreement
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-gray-900 mb-4">
                        PRIVACY POLICY
                    </h1>
                    <p className="text-lg sm:text-xl font-bold text-[#cd1d1d]">
                        DASH Mobility
                    </p>
                    <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-6 mt-5 bg-gray-50 border border-gray-100 rounded-lg px-5 py-3 text-sm text-gray-500">
                        <span>Effective Date: 25 April 2026</span>
                    </div>
                </div>

                {/* Intro Paragraphs */}
                <div className="space-y-4 mb-10 text-gray-600 leading-relaxed text-sm sm:text-base">
                    <p>
                        Dash Mobility ("we", "our", or "us") operates the Dash Mobility mobile application (the "App"). We take the privacy and security of our users ("you," "user," or "Rider") very seriously. This Privacy Policy outlines in granular technical detail how we collect, process, store, and share your data in compliance with global data protection standards and the Google Play Developer program policies.
                    </p>
                    <p>
                        If you do not agree with the terms outlined in this document, please do not use the Dash Mobility App.
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mb-8" />

                <Section title="1. Data We Collect and Process">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        To provide our battery-swapping and electric mobility services, we collect comprehensive data through explicit user input, passive background collection, and third-party Software Development Kits (SDKs).
                    </p>
                    
                    <SubSection title="A. Account & Identity Data" />
                    <BulletList items={[
                        <><strong className="text-gray-800">Authentication Information:</strong> When you create an account, we use <strong>Firebase Authentication</strong> to collect and verify your phone number via SMS OTP using the <code>smart_auth</code> and <code>sms_autofill</code> SDKs. We also collect your email address, full name, and assign a unique User ID (UID).</>,
                        <><strong className="text-gray-800">Profile Data:</strong> Profile pictures, KYC documents, and other uploaded media are collected and stored securely via <strong>Firebase Cloud Storage</strong>.</>
                    ]} />

                    <SubSection title="B. Device & Hardware Information" />
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        We automatically collect device-specific information to ensure compatibility, perform analytics, and prevent fraud.
                    </p>
                    <BulletList items={[
                        <><strong className="text-gray-800">Hardware Specifications:</strong> Device model, manufacturer, and operating system version (collected via <code>device_info_plus</code> and <code>package_info_plus</code>).</>,
                        <><strong className="text-gray-800">Device Security State:</strong> We check if your device is rooted or jailbroken (via <code>safe_device</code>) to prevent fraud and unauthorized API abuse.</>,
                        <><strong className="text-gray-800">Unique Identifiers:</strong> We collect Firebase Installation IDs, FCM Push Notification Tokens, and your Google Android <strong>Advertising ID</strong> (<code>com.google.android.gms.permission.AD_ID</code>).</>
                    ]} />

                    <SubSection title="C. Sensitive Permission Data" />
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        The App requires the following explicit permissions to function natively. This data is only collected when permissions are granted by the user:
                    </p>
                    <BulletList items={[
                        <><strong className="text-gray-800">Location Data (<code>ACCESS_FINE_LOCATION</code>, <code>ACCESS_COARSE_LOCATION</code>):</strong> We use the <code>geolocator</code> and <code>google_maps_flutter</code> SDKs to trace your real-time exact geographic coordinates. This is used for mapping your current position, determining proximity to Dash Battery Swap Stations, and dispatch routing.</>,
                        <><strong className="text-gray-800">Audio Recording (<code>RECORD_AUDIO</code>):</strong> We use the <code>record</code> and <code>audioplayers</code> SDKs to capture microphone input. This is strictly utilized when you explicitly interact with our in-app audio-recording functionalities (e.g., sending voice notes to our customer support or fleet managers). <strong>We do not record audio in the background or without your explicit action.</strong></>,
                        <><strong className="text-gray-800">Camera and Local Storage:</strong> We use the <code>image_picker</code> SDK to access your camera and local file system to process profile photos and identity verification documents.</>,
                        <><strong className="text-gray-800">SMS Reading (OTP Phase):</strong> We read incoming SMS messages strictly during the login/signup process to automatically populate One-Time Passwords.</>
                    ]} />
                </Section>

                <Section title="2. How We Use the Data">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        We process your data strictly to facilitate the functional, operational, and security requirements of the Dash Mobility network:
                    </p>
                    <NumberedPoint n="1">
                        <strong>Core Functionality:</strong> Dispatching electric vehicles, mapping the fastest routes to battery swap stations, and tracking active ride states.
                    </NumberedPoint>
                    <NumberedPoint n="2">
                        <strong>In-App Support:</strong> Providing integrated text and audio-based customer support features.
                    </NumberedPoint>
                    <NumberedPoint n="3">
                        <strong>Authentication & Security:</strong> Managing user sessions safely, preventing unauthorized account access, validating device integrity via root-checks, and securely storing preferences on your device (<code>shared_preferences</code>).
                    </NumberedPoint>
                    <NumberedPoint n="4">
                        <strong>Communication:</strong> Sending transactional push notifications, system updates, and localized in-app messaging via <strong>Firebase Cloud Messaging (FCM)</strong> and <code>flutter_local_notifications</code>.
                    </NumberedPoint>
                    <NumberedPoint n="5">
                        <strong>Analytics & Diagnostics:</strong> Tracking application crash reports, analyzing UI/UX interactions, and understanding aggregated user flows to optimize performance via <strong>Firebase Crashlytics</strong> and <strong>Firebase Analytics</strong>.
                    </NumberedPoint>
                </Section>

                <Section title="3. Third-Party Service Integrations">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        Dash Mobility integrates with highly secure, industry-standard third-party providers. By using this App, you acknowledge that your data is actively transmitted to and processed by:
                    </p>
                    <BulletList items={[
                        <><strong className="text-gray-800">Google Firebase (Google LLC):</strong> We utilize Firestore (NoSQL database), Firebase Auth (identity management), Firebase Storage (media bucket), and Firebase Analytics. Data transmitted to Firebase is encrypted in transit and at rest. Firebase utilizes the Android Advertising ID for aggregate measurement purposes.</>,
                        <><strong className="text-gray-800">Google Maps Platform (Google LLC):</strong> Real-time coordinate mapping, geocoding, and routing features share your GPS data directly with Google's APIs.</>
                    ]} />
                    <p className="text-gray-500 italic text-sm mt-4">
                        You can review Google's own privacy policies to understand exactly how they process this sub-processed data: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#cd1d1d] hover:underline">Google Privacy Policy</a>.
                    </p>
                </Section>

                <Section title="4. Advertising ID Declaration">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        In compliance with Android 13 (API Level 33) policies, we explicitly declare the inclusion of the <code>com.google.android.gms.permission.AD_ID</code> permission within our Android Manifest.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        <strong>Usage:</strong> The Advertising ID is utilized strictly for <strong>App Functionality and General Analytics</strong> through our backend Firebase Services (such as tracking installation attribution and measuring daily active usage). It is <strong>never</strong> utilized to broker your data to third-party ad networks or serve you targeted banner advertisements. If you wish to opt-out of Advertising ID tracking, you can do so natively via your Android system settings (<code>Settings &gt; Privacy &gt; Ads &gt; Delete advertising ID</code>).
                    </p>
                </Section>

                <Section title="5. Data Security Protocols">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        We implement stringent transport-level and at-rest security boundaries:
                    </p>
                    <BulletList items={[
                        <><strong className="text-gray-800">Encryption in Transit:</strong> All communications between the mobile application and our backend database (Firestore) occur over secure HTTPS/TLS 1.2+ protocols using the <code>http</code> SDK and native gRPC pipes.</>,
                        <><strong className="text-gray-800">Secure Local Storage:</strong> Sensitive tokens and ephemeral user states are encrypted locally on your device.</>,
                        <><strong className="text-gray-800">Cryptography:</strong> We utilize cryptographic hashing (via the <code>crypto</code> SDK) and symmetric encryption algorithms (<code>encrypt</code>) to safeguard local data blobs and sensitive application configurations against tampering.</>
                    ]} />
                </Section>

                <Section title="6. Data Retention and Account Deletion">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        We retain your primary profile and ride telemetry data as long as your account remains active, ensuring you have uninterrupted access to Dash Mobility services.
                    </p>
                    <SubSection title="Right to Erasure (Data Deletion Request)" />
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        You reserve the right to delete your data at any time. To initiate account deletion:
                    </p>
                    <NumberedPoint n="1">
                        You may use the "Delete Account" functional button located inside the Profile/Settings UI of the Application.
                    </NumberedPoint>
                    <NumberedPoint n="2">
                        Alternatively, you may contact our engineering and support team directly via email at <strong>support@dashmobility.in</strong>.
                    </NumberedPoint>
                    <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                        Upon requesting deletion, your authentication records, PII (Personally Identifiable Information), locally stored data, and uploaded media will be permanently scrubbed from our active databases and Google Cloud servers within 30 days, retaining only anonymized, aggregated transaction hashes necessary for financial auditing.
                    </p>
                </Section>

                <Section title="7. Modifications to the Policy">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We reserve the right to deploy updates to this Privacy Policy to reflect architectural shifts, SDK updates, or changes in regional regulatory laws. When significant changes occur regarding sensitive permissions, we will issue an active prompt via Firebase In-App Messaging notifying you of the updated policy terms.
                    </p>
                </Section>

                {/* Section 8 - Contact */}
                <Section title="8. Contact Our Data Protection Team">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        For any technical questions regarding data telemetry, API requests, third-party sub-processors, or to exercise your privacy rights, please escalate your query to:
                    </p>
                    <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-5 sm:p-6">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">DASH Mobility Support & Compliance Team</p>
                        <div className="space-y-3 mt-4">
                            <a href="mailto:support@dashmobility.in" className="flex items-center gap-3 text-gray-600 hover:text-[#cd1d1d] transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                    <Mail size={16} className="text-[#cd1d1d]" />
                                </span>
                                <span className="text-sm sm:text-base font-medium">support@dashmobility.in</span>
                            </a>
                        </div>
                    </div>
                </Section>

                {/* Back to Top */}
                <div className="flex justify-center mt-12 mb-4">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#cd1d1d] transition-colors cursor-pointer"
                    >
                        <ChevronUp size={16} />
                        Back to top
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ── Sub-components ─────────────────────────────────────── */

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-[#cd1d1d] mb-4 mt-2">{title}</h2>
        {children}
    </section>
);

const SubSection = ({ title }) => (
    <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">{title}</h3>
);

const NumberedPoint = ({ n, children }) => (
    <div className="flex gap-3 mb-2 text-sm sm:text-base text-gray-600 leading-relaxed">
        <span className="font-bold text-gray-700 min-w-[24px] shrink-0">{n}.</span>
        <span>{children}</span>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="ml-2 sm:ml-4 mb-3 space-y-2">
        {items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm sm:text-base text-gray-600 leading-relaxed items-start">
                <span className="text-[#cd1d1d] mt-1.5 text-[8px] shrink-0">●</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

export default PrivacyPolicy;
