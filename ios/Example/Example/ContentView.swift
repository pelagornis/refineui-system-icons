import SwiftUI
import RefineUIIcons

struct ContentView: View {
    @State private var searchText = ""

    private var filteredIcons: [RefineUIIcons] {
        let query = searchText.trimmingCharacters(in: .whitespacesAndNewlines)
        let icons = RefineUIIcons.allCases

        guard !query.isEmpty else {
            return Array(icons.prefix(120))
        }

        return icons.filter { icon in
            icon.resourceString.localizedCaseInsensitiveContains(query)
        }
    }

    var body: some View {
        NavigationStack {
            List(filteredIcons, id: \.self) { icon in
                HStack(spacing: 12) {
                    Image(refineUIIcon: icon)
                        .resizable()
                        .scaledToFit()
                        .frame(width: 24, height: 24)
                    Text(icon.resourceString)
                        .font(.caption)
                        .lineLimit(2)
                }
            }
            .navigationTitle("RefineUI Icons")
            .searchable(text: $searchText, prompt: "Search icons")
            .overlay {
                if filteredIcons.isEmpty {
                    ContentUnavailableView.search(text: searchText)
                }
            }
            .safeAreaInset(edge: .bottom) {
                if searchText.isEmpty {
                    Text("Showing first 120 icons · search to browse all \(RefineUIIcons.allCases.count)")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 8)
                        .background(.bar)
                }
            }
        }
    }
}

#Preview {
    ContentView()
}
