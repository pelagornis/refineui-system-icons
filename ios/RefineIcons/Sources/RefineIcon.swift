import Foundation

@objc public enum RefineIcon: Int, Equatable, CaseIterable {
    case accessTime16Regular
    case accessTime16Filled
    case accessTime20Regular
    case accessTime20Filled
    case accessTime24Regular
    case accessTime24Filled
    case accessTime28Regular
    case accessTime28Filled
    case accessTime32Regular
    case accessTime32Filled
    case accessTime48Regular
    case accessTime48Filled

    static var iconName: String {
        switch self {
            case .accessTime16Regular: return "ic_refine_access_time_16_regular"
            case .accessTime16Filled: return "ic_refine_access_time_16_filled"
            case .accessTime20Regular: return "ic_refine_access_time_20_regular"
            case .accessTime20Filled: return "ic_refine_access_time_20_filled"
            case .accessTime24Regular: return "ic_refine_access_time_24_regular"
            case .accessTime24Filled: return "ic_refine_access_time_24_filled"
            case .accessTime28Regular: return "ic_refine_access_time_28_regular"
            case .accessTime32Regular: return "ic_refine_access_time_32_regular"
            case .accessTime32Filled: return "ic_refine_access_time_32_filled"
            case .accessTime48Regular: return "ic_refine_access_time_48_regular"
            case .accessTime48Filled: return "ic_refine_access_time_48_filled"
        }
    }
}