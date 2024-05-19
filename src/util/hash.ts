import * as bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string>{
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt)
}


export async function comparePassword(password:string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}
