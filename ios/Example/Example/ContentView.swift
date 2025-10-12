import SwiftUI
import RefineUIIcons

struct ContentView: View {
    var body: some View {
        List(RefineUIIcons.allCases, id: \.self) { icon in
            HStack {
                Image(refineUIIcon: icon)
                Text(icon.resourceString)
            }
        }
    }
}

#Preview {
    ContentView()
}
