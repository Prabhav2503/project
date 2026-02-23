import React from 'react';
import { Mail, Phone, AlertTriangle, ChevronUp } from 'lucide-react';

const TermsOfService = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-xs sm:text-sm tracking-[3px] text-gray-400 uppercase mb-3">
                        Legal Agreement
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-gray-900 mb-4">
                        TERMS OF SERVICE
                    </h1>
                    <p className="text-lg sm:text-xl font-bold text-[#cd1d1d]">
                        DASH Mobility
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        A Unit of Deepankar Engineers & Consultants
                    </p>
                    <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-6 mt-5 bg-gray-50 border border-gray-100 rounded-lg px-5 py-3 text-sm text-gray-500">
                        <span>Effective Date: 13 February 2025</span>
                        <span className="hidden sm:inline text-gray-300">|</span>
                        <span>Last Updated: 13 February 2025</span>
                    </div>
                </div>

                {/* Intro Paragraphs */}
                <div className="space-y-4 mb-10 text-gray-600 leading-relaxed text-sm sm:text-base">
                    <p>
                        These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you") and Deepankar Engineers & Consultants, operating under the brand name Dash Mobility ("Dash Mobility", "Company", "we", "us", or "our"), governing your access to and use of the Dash Mobility mobile application ("App") and related vehicle rental, mobility, and support services ("Services").
                    </p>
                    <p>
                        By accessing, registering, or using the App or Services, you expressly acknowledge that you have read, understood, and agreed to be bound by these Terms and the Privacy Policy.
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 mb-8" />

                {/* Section 1 */}
                <Section title="1. Overview of Services">
                    <NumberedPoint n="1.1">
                        Dash Mobility provides electric vehicle rental and related mobility support services through the App.
                    </NumberedPoint>
                    <NumberedPoint n="1.2">
                        Dash Mobility does not provide transportation services, logistics services, employment, or agency arrangements. Users operate vehicles independently and at their own risk.
                    </NumberedPoint>
                    <NumberedPoint n="1.3">
                        Dash Mobility reserves the right to modify, suspend, or discontinue any part of the Services at any time.
                    </NumberedPoint>
                </Section>

                {/* Section 2 */}
                <Section title="2. Eligibility">
                    <NumberedPoint n="2.1">You must:</NumberedPoint>
                    <BulletList items={[
                        'Be at least 18 years of age',
                        'Have the legal capacity to enter into a binding contract under Indian law',
                    ]} />
                    <NumberedPoint n="2.2">
                        Submission of Aadhaar and PAN is mandatory for identity verification.
                    </NumberedPoint>
                    <NumberedPoint n="2.3">
                        Dash Mobility may refuse service or terminate accounts without assigning reasons, subject to applicable law.
                    </NumberedPoint>
                </Section>

                {/* Section 3 */}
                <Section title="3. Registration & Account">
                    <NumberedPoint n="3.1">Account creation requires:</NumberedPoint>
                    <BulletList items={[
                        'Mobile number verification via OTP',
                        'Completion of onboarding steps',
                        'Submission of required documents and information',
                    ]} />
                    <NumberedPoint n="3.2">
                        Account approval is subject to manual verification by Dash Mobility.
                    </NumberedPoint>
                    <NumberedPoint n="3.3">Accounts are:</NumberedPoint>
                    <BulletList items={['Personal', 'Non-transferable', 'Restricted to a single verified individual']} />
                    <NumberedPoint n="3.4">
                        Dash Mobility may suspend or reject accounts containing false, misleading, incomplete, or unverifiable information.
                    </NumberedPoint>
                </Section>

                {/* Section 4 */}
                <Section title="4. User Obligations">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        You represent and warrant that:
                    </p>
                    <BulletList items={[
                        'All information provided is accurate and lawful',
                        'You will comply with all applicable laws and regulations',
                        'You will not use the Services for any unlawful or prohibited purpose',
                        'You are solely responsible for your conduct and vehicle usage',
                    ]} />
                </Section>

                {/* Section 5 */}
                <Section title="5. Vehicle Ownership & License">
                    <NumberedPoint n="5.1">
                        All vehicles remain the exclusive property of Dash Mobility.
                    </NumberedPoint>
                    <NumberedPoint n="5.2">
                        Users are granted a temporary, revocable, non-exclusive, non-transferable license to use the vehicle during an active plan.
                    </NumberedPoint>
                    <NumberedPoint n="5.3">This license:</NumberedPoint>
                    <BulletList items={[
                        'Automatically terminates upon plan expiry, termination, or breach',
                        'Does not create ownership, tenancy, lease, or bailment rights',
                    ]} />
                </Section>

                {/* Section 6 */}
                <Section title="6. Permitted & Prohibited Use">
                    <SubSection title="Permitted Use" />
                    <BulletList items={[
                        'Commercial delivery activities',
                        'Personal transportation',
                    ]} />
                    <SubSection title="Strictly Prohibited" />
                    <BulletList items={[
                        'Sub-leasing or sharing the vehicle',
                        'Vehicle modification or tampering',
                        'Removal or interference with GPS or tracking systems',
                        'Reckless driving, racing, stunts',
                        'Use under alcohol or narcotics',
                        'Illegal, unsafe, or unauthorized use',
                        'Allowing unverified persons to operate the vehicle',
                    ]} />
                    <WarningBox>
                        Violation may result in immediate termination, recovery, and legal action.
                    </WarningBox>
                </Section>

                {/* Section 7 */}
                <Section title="7. Pricing & Plans">
                    <NumberedPoint n="7.1">Current plans include:</NumberedPoint>
                    <BulletList items={[
                        'Weekly Plan: ₹1,700 (7 days)',
                        'Monthly Plan: ₹7,000 (30 days)',
                    ]} />
                    <NumberedPoint n="7.2">All plans:</NumberedPoint>
                    <BulletList items={[
                        'Require advance payment',
                        'Are non-refundable',
                        'Are non-transferable',
                        'Are non-pro-rated for early return',
                    ]} />
                    <NumberedPoint n="7.3">
                        Dash Mobility reserves the right to revise pricing at any time.
                    </NumberedPoint>
                </Section>

                {/* Section 8 */}
                <Section title="8. Security Deposit">
                    <NumberedPoint n="8.1">
                        A refundable security deposit of ₹1,000 is mandatory for first-time users.
                    </NumberedPoint>
                    <NumberedPoint n="8.2">
                        Dash Mobility may deduct from the deposit for:
                    </NumberedPoint>
                    <BulletList items={['Damage', 'Missing parts', 'Outstanding dues', 'Breach of Terms']} />
                    <NumberedPoint n="8.3">
                        Refunds are processed within 5–7 working days after vehicle return approval.
                    </NumberedPoint>
                    <NumberedPoint n="8.4">
                        If liabilities exceed the deposit, the User remains liable for the balance.
                    </NumberedPoint>
                </Section>

                {/* Section 9 */}
                <Section title="9. Maintenance & Support">
                    <NumberedPoint n="9.1">Included services:</NumberedPoint>
                    <BulletList items={[
                        'Routine maintenance',
                        'Battery swapping',
                        'Roadside assistance',
                    ]} />
                    <NumberedPoint n="9.2">Chargeable to User:</NumberedPoint>
                    <BulletList items={[
                        'Damage due to misuse, negligence, or accidents',
                        'Parts replacement beyond normal wear',
                    ]} />
                    <NumberedPoint n="9.3">
                        Dash Mobility does not guarantee uninterrupted availability and shall not be liable for downtime, delays, or loss of earnings.
                    </NumberedPoint>
                </Section>

                {/* Section 10 */}
                <Section title="10. Accident & Damage Liability">
                    <NumberedPoint n="10.1">
                        Accidents and damage must be reported immediately.
                    </NumberedPoint>
                    <NumberedPoint n="10.2">
                        Theft must be reported promptly and may require a police FIR.
                    </NumberedPoint>
                    <NumberedPoint n="10.3">
                        Users are solely liable for:
                    </NumberedPoint>
                    <BulletList items={[
                        'Repair or replacement costs',
                        'Third-party injury or property damage',
                        'Traffic violations, fines, and penalties',
                    ]} />
                    <NumberedPoint n="10.4">
                        Dash Mobility disclaims liability for any claims arising from vehicle operation.
                    </NumberedPoint>
                </Section>

                {/* Section 11 */}
                <Section title="11. GPS Tracking & Vehicle Recovery">
                    <NumberedPoint n="11.1">
                        Vehicles are equipped with GPS tracking.
                    </NumberedPoint>
                    <NumberedPoint n="11.2">
                        Dash Mobility may locate and recover vehicles in cases of:
                    </NumberedPoint>
                    <BulletList items={[
                        'Payment default',
                        'Plan expiry',
                        'Misuse',
                        'Unauthorized possession',
                    ]} />
                    <NumberedPoint n="11.3">
                        Users consent to such recovery actions.
                    </NumberedPoint>
                </Section>

                {/* Section 12 */}
                <Section title="12. Suspension & Termination">
                    <NumberedPoint n="12.1">
                        Dash Mobility may suspend or terminate access immediately for:
                    </NumberedPoint>
                    <BulletList items={[
                        'Non-payment',
                        'Fraud or misrepresentation',
                        'Breach of Terms',
                        'Illegal activity',
                    ]} />
                    <NumberedPoint n="12.2">
                        Termination does not release the User from outstanding liabilities.
                    </NumberedPoint>
                </Section>

                {/* Section 13 */}
                <Section title="13. Intellectual Property">
                    <NumberedPoint n="13.1">
                        All App content, trademarks, software, and designs are the exclusive property of Dash Mobility.
                    </NumberedPoint>
                    <NumberedPoint n="13.2">
                        Users receive a limited, revocable license to use the App for personal use only.
                    </NumberedPoint>
                    <NumberedPoint n="13.3">
                        Reverse engineering, copying, or misuse of IP is prohibited.
                    </NumberedPoint>
                </Section>

                {/* Section 14 */}
                <Section title="14. Disclaimers">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        The Services are provided "as is" and "as available".
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        Dash Mobility disclaims all warranties, including:
                    </p>
                    <BulletList items={[
                        'Fitness for a particular purpose',
                        'Continuous availability',
                        'Error-free operation',
                    ]} />
                </Section>

                {/* Section 15 */}
                <Section title="15. Limitation of Liability">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        To the maximum extent permitted by law:
                    </p>
                    <BulletList items={[
                        'Dash Mobility shall not be liable for indirect, incidental, or consequential damages',
                        'Total liability shall not exceed the amount paid by the User in the preceding 30 days',
                    ]} />
                </Section>

                {/* Section 16 */}
                <Section title="16. Indemnification">
                    <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">
                        Users agree to indemnify Dash Mobility against all claims, losses, damages, penalties, and legal costs arising from:
                    </p>
                    <BulletList items={[
                        'Vehicle usage',
                        'Legal violations',
                        'Third-party claims',
                        'Breach of these Terms',
                    ]} />
                </Section>

                {/* Section 17 */}
                <Section title="17. Force Majeure">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Dash Mobility shall not be liable for delays or failures due to events beyond reasonable control, including natural disasters, government actions, pandemics, or infrastructure failures.
                    </p>
                </Section>

                {/* Section 18 */}
                <Section title="18. Amendments">
                    <NumberedPoint n="18.1">
                        Dash Mobility may amend these Terms at any time.
                    </NumberedPoint>
                    <NumberedPoint n="18.2">
                        Continued use after updates constitutes acceptance.
                    </NumberedPoint>
                    <NumberedPoint n="18.3">
                        If you disagree, you must stop using the Services.
                    </NumberedPoint>
                </Section>

                {/* Section 19 */}
                <Section title="19. Governing Law & Dispute Resolution">
                    <NumberedPoint n="19.1">
                        Disputes shall be resolved by arbitration under the Arbitration and Conciliation Act, 1996.
                    </NumberedPoint>
                    <NumberedPoint n="19.2">
                        Seat and venue: Delhi, India
                    </NumberedPoint>
                    <NumberedPoint n="19.3">
                        Governing law: Laws of India
                    </NumberedPoint>
                    <NumberedPoint n="19.4">
                        Courts at Delhi retain exclusive jurisdiction for non-arbitrable matters.
                    </NumberedPoint>
                </Section>

                {/* Section 20 */}
                <Section title="20. General Provisions">
                    <BulletList items={[
                        'Invalid provisions shall not affect remaining clauses',
                        'Clauses relating to liability, indemnity, dispute resolution, and IP survive termination',
                    ]} />
                </Section>

                {/* Section 21 - Contact */}
                <Section title="21. Contact Information">
                    <div className="mt-3 bg-gray-50 border border-gray-100 rounded-xl p-5 sm:p-6">
                        <p className="font-bold text-gray-900 text-base sm:text-lg">DASH Mobility</p>
                        <p className="text-sm text-gray-400 mb-4">A Unit of Deepankar Engineers & Consultants</p>
                        <div className="space-y-3">
                            <a href="mailto:support@dashmobility.in" className="flex items-center gap-3 text-gray-600 hover:text-[#cd1d1d] transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                    <Mail size={16} className="text-[#cd1d1d]" />
                                </span>
                                <span className="text-sm sm:text-base">support@dashmobility.in</span>
                            </a>
                            <a href="tel:9217783765" className="flex items-center gap-3 text-gray-600 hover:text-[#cd1d1d] transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                    <Phone size={16} className="text-[#cd1d1d]" />
                                </span>
                                <span className="text-sm sm:text-base">9217783765</span>
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
        <span className="font-bold text-gray-700 min-w-[36px] shrink-0">{n}</span>
        <span>{children}</span>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="ml-10 sm:ml-12 mb-3 space-y-1.5">
        {items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                <span className="text-[#cd1d1d] mt-1.5 text-[6px]">●</span>
                <span>{item}</span>
            </li>
        ))}
    </ul>
);

const WarningBox = ({ children }) => (
    <div className="flex items-start gap-3 my-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <AlertTriangle size={18} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-sm sm:text-base text-amber-800 font-medium leading-relaxed">{children}</p>
    </div>
);

export default TermsOfService;
