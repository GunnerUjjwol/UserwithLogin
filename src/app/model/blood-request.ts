import { BloodGroup } from "./blood-group";

export class BloodRequest {
    public bloodRequestId: number;
    public bloodGroup: BloodGroup;
    public pint: number;
    public status: boolean;
}
