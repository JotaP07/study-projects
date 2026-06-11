/* eslint-disable no-prototype-builtins */
import { type ClassValue, clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

// Helper to merge and conditionally apply class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format a date into various formats
export const formatDateTime = (dateString: Date) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const dateDayOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        year: "numeric",
        day: "numeric",
    };

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    return {
        dateTime: new Date(dateString).toLocaleString("en-US", dateTimeOptions),
        dateDay: new Date(dateString).toLocaleString("en-US", dateDayOptions),
        dateOnly: new Date(dateString).toLocaleString("en-US", dateOptions),
        timeOnly: new Date(dateString).toLocaleString("en-US", timeOptions),
    };
};

// Format currency amounts
export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    return formatter.format(amount);
}

// Parse and stringify an object
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// Remove special characters from a string
export const removeSpecialCharacters = (value: string) => {
    return value.replace(/[^\w\s]/gi, "");
};

// Formulate URL query string
interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
    const currentUrl = qs.parse(params);
    currentUrl[key] = value;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        { skipNull: true }
    );
}

// Get account type colors
export function getAccountTypeColors(type: AccountTypes) {
    switch (type) {
        case "depository":
            return {
                bg: "bg-blue-25",
                lightBg: "bg-blue-100",
                title: "text-blue-900",
                subText: "text-blue-700",
            };
        case "credit":
            return {
                bg: "bg-success-25",
                lightBg: "bg-success-100",
                title: "text-success-900",
                subText: "text-success-700",
            };
        default:
            return {
                bg: "bg-green-25",
                lightBg: "bg-green-100",
                title: "text-green-900",
                subText: "text-green-700",
            };
    }
}

// Count transaction categories
export function countTransactionCategories(
    transactions: Transaction[]
): CategoryCount[] {
    const categoryCounts: { [category: string]: number } = {};
    let totalCount = 0;

    if (transactions) {
        transactions.forEach((transaction) => {
            const category = transaction.category;
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
            totalCount++;
        });
    }

    return Object.keys(categoryCounts)
        .map((category) => ({
            name: category,
            count: categoryCounts[category],
            total: totalCount,
        }))
        .sort((a, b) => b.count - a.count);
}

// Extract customer ID from URL
export function extractCustomerIdFromUrl(url: string) {
    return url.split("/").pop() || "";
}

// Encrypt and decrypt IDs
export function encryptId(id: string) {
    return btoa(id);
}

export function decryptId(id: string) {
    return atob(id);
}

// Determine transaction status based on date
export const getTransactionStatus = (date: Date) => {
    const today = new Date();
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);

    return date > twoDaysAgo ? "Processing" : "Success";
};

// Validation schema for auth forms
export const authFormSchema = (type: string) =>
    z.object({
        firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
        lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
        address1: type === "sign-in" ? z.string().optional() : z.string().max(50),
        city: type === "sign-in" ? z.string().optional() : z.string().max(50),
        state: type === "sign-in" ? z.string().optional() : z.string().min(2).max(2),
        postalCode: type === "sign-in" ? z.string().optional() : z.string().min(3).max(6),
        dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
        ssn: type === "sign-in" ? z.string().optional() : z.string().min(3),
        email: z.string().email(),
        password: z.string().min(8),
    });
