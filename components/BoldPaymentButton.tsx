import React, { useEffect, useRef } from 'react';

interface BoldPaymentButtonProps {
    description: string;
    orderId?: string;
    amount?: number; // Optional: If provided, requires integrity signature logic (backend)
    currency?: 'COP' | 'USD';
    apiKey?: string; // Optional: Can be set globally or per button
    style?: 'dark' | 'light';
    size?: 'S' | 'M' | 'L';
}

const BoldPaymentButton: React.FC<BoldPaymentButtonProps> = ({
    description,
    orderId,
    amount,
    currency = 'COP',
    apiKey = 'YOUR_API_KEY_HERE', // Placeholder
    style = 'dark',
    size = 'L'
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear previous content
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');

        // Attributes
        script.setAttribute('data-bold-button', `${style}-${size}`);
        script.setAttribute('data-api-key', apiKey);
        script.setAttribute('data-description', description);
        script.setAttribute('data-currency', currency);

        if (orderId) {
            script.setAttribute('data-order-id', orderId);
        }

        // Note: If amount is set, we need data-integrity-signature which requires backend generation.
        // For this frontend-only implementation, we omit amount to avoid errors, 
        // or the user must implement the hash logic.
        if (amount) {
            // script.setAttribute('data-amount', amount.toString());
            // script.setAttribute('data-integrity-signature', 'HASH_FROM_BACKEND');
            console.warn('BoldPaymentButton: Amount provided but integrity signature logic is missing. Amount attribute omitted.');
        }

        // Append to container
        containerRef.current.appendChild(script);

        // Since the library is loaded in index.html, we might need to trigger a scan if it doesn't observe.
        // However, the Bold library usually runs on load. If we are adding this dynamically,
        // we might need to re-inject the library script or rely on it observing the DOM.
        // If the global script doesn't work for dynamic content, we can try setting the src on this script tag itself.
        // Let's try the self-contained approach as a fallback/reinforcement.
        // script.src = "https://checkout.bold.co/library/boldPaymentButton.js"; 
        // BUT we already added it to index.html. Let's see if the global one picks it up.
        // If not, we might need to remove the global one and use the per-component one.

        // Re-evaluating: The docs say "Añadir un script... en el lugar donde quieras que se muestre".
        // If the library is in HEAD, it runs ONCE. It might not see this new script.
        // The docs for React say: "inyectar en el head una vez el script del botón se encuentre en el DOM".
        // This implies we should inject the library HERE, not in index.html, OR force a reload.

        // Let's try the "src on button" approach which is documented as an alternative.
        // It is safer for React.
        script.src = "https://checkout.bold.co/library/boldPaymentButton.js";

    }, [description, orderId, amount, currency, apiKey, style, size]);

    return <div ref={containerRef} className="bold-button-container" />;
};

export default BoldPaymentButton;
