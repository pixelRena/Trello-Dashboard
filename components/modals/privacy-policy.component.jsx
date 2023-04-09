import {Button, Modal} from "flowbite-react";
import { useState } from "react";

export default function PrivacyPolicy() {
    const [open, setOpen] = useState(false);

    return(
        <>
        <button className="text-blue-500 hover:underline" onClick={() => setOpen(true)}>Privacy Policy</button>
        <Modal
            show={open}
            size="xs"
            onClose={() => setOpen(false)}
        >
            <Modal.Header className="bg-gray-700">
            Privacy Policy
            </Modal.Header>
            <Modal.Body className="bg-gray-700">
            <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 text-gray-400">
                We respect your privacy and are committed to protecting your personal data.
                </p>
                <p className="text-base leading-relaxed text-gray-500 text-gray-400">
                This Privacy Policy explains how we collect, use, and disclose your personal data in connection with your use of Trellometrics. By accessing or using Trellometrics, you agree to the terms of this Privacy Policy.
                </p>
                <ol className=" px-5 list-decimal">
                    <li>Collection of Information
                        <p className="font-light">
                        We may collect personal data that you provide to us when you use the Trellometrics, such as your name, email address, and Trello credentials. We may also collect information about your use of Trellometrics, including your Trello board and card activity and analytics data.</p>
                    </li>
                    <li>Use of Information
                        <p className="font-light">
                        We may use your personal data to provide and improve the Trellometrics, communicate with you about the Trellometrics, and personalize your experience with Trellometrics. We may also use your personal data to analyze usage trends, monitor and prevent fraud, and comply with applicable laws and regulations.
                        </p>
                    </li>
                    <li> Sharing of Information
                        <p className="font-light">
                        We may share your personal data with third-party service providers that perform services on our behalf, such as hosting providers, analytics providers, and customer support providers. We may also share your personal data with Trello and its affiliates in order to provide and improve Trellometrics. We may disclose your personal data if we believe it is necessary to comply with a legal obligation, protect our rights or property, or prevent fraud or other illegal activity.
                        </p>
                    </li>
                    <li>Security
                        <p className="font-light">
                        We take reasonable measures to protect your personal data from unauthorized access, disclosure, or use. However, no method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your personal data.
                        </p>
                    </li>
                    <li>Your Rights
                        <p className="font-light">
                        You may have certain rights with respect to your personal data, including the right to access, rectify, and erase your personal data, and the right to restrict or object to certain processing of your personal data.
                        </p>
                    </li>
                    <li>Changes to this Privacy Policy
                        <p className="font-light">
                        We may modify this Privacy Policy at any time. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on Trellometrics. Your continued use of Trellometrics after any changes to this Privacy Policy will signify your acceptance of such changes.
                        </p>
                    </li>
                </ol>
            </div>
            </Modal.Body>
        </Modal>
        </>
    )
}