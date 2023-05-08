export function regexCode(regex: string): boolean {
    let ACCOUNT_REGEX: RegExp = /^[A-Z]{2}\d{3}$/; // chứa hai chữ hoa và sau đó là 3 chữ số
    return ACCOUNT_REGEX.test(regex);
}

export function regexName(regex: string): boolean {
    let ACCOUNT_REGEX: RegExp = /^[a-zA-Z\s]+$/; // chỉ chứa chữ thường, chữ hoa và dấu cách
    return ACCOUNT_REGEX.test(regex);
}

export function regexAddress(regex: string): boolean {
    let ACCOUNT_REGEX: RegExp = /^[a-zA-Z\s]+$/; // chỉ chứa chữ thường, chữ hoa và dấu cách
    return ACCOUNT_REGEX.test(regex);
}

export function regexPoint(regex: string): boolean {
    let ACCOUNT_REGEX: RegExp = /^\d+(\.\d+)?$/; // là số  dương thập phân hoặc nguyên
    return ACCOUNT_REGEX.test(regex);
}

export function regexHobby(regex: string): boolean {
    let ACCOUNT_REGEX: RegExp = /^[a-zA-Z\s]+$/; // // chỉ chứa chữ thường, chữ hoa và dấu cách
    return ACCOUNT_REGEX.test(regex);
}

