export const bubbleSort = 
`func bubblesort(items []int) {
    var sorted bool
    n := len(items)
    for !sorted {
        var swapped bool
        for i := 0; i < n-1; i++ {
            if items[i] > items[i+1] {
                items[i+1], items[i] = items[i], items[i+1]
                swapped = true
            }
        }
        if !swapped {
            sorted = true
        }
        n--
    }
}`

export const quickSort = 
`func quicksort(items []int) []int {
    n := len(items)
    if n < 2 {
        return items
    }

    left, right := 0, n-1

    pivot := n / 2

    items[pivot], items[right] = items[right], items[pivot]

    for i := range items {
        if items[i] < items[right] {
            items[left], items[i] = items[i], items[left]
            left++
        }
    }

    items[left], items[right] = items[right], items[left]

    quicksort(items[:left])
    quicksort(items[left+1:])

    return items
}`

export const selectionSort = 
`func selectionsort(items []int) {
    n := len(items)
    for i := 0; i < n; i++ {
        var minIdx = i
        for j := i; j < n; j++ {
            if items[j] < items[minIdx] {
                minIdx = j
            }
        }
        items[i], items[minIdx] = items[minIdx], items[i]
    }
}`

export const insertionSort = 
`func insertionsort(items []int) {
    n := len(items)
    for i := 1; i < n; i++ {
        j := i
        for j > 0 {
            if items[j-1] > items[j] {
                items[j-1], items[j] = items[j], items[j-1]
            }
            j = j - 1
        }
    }
}`

export const binarySearch = 
`func binarySearch(needle int, haystack []int) bool {
    low := 0
    high := len(haystack) - 1

    for low <= high{
        median := (low + high) / 2

        if haystack[median] < needle {
            low = median + 1
        }else{
            high = median - 1
        }
    }

    if low == len(haystack) || haystack[low] != needle {
        return false
    }

    return true
}`

export const binaryTree = 
`type BinaryNode struct {
    left  *BinaryNode
    right *BinaryNode
    value int
}

type BinaryTree struct {
    root *BinaryNode
}

func (t *BinaryTree) insert(value int) *BinaryTree {
    if t.root == nil {
        t.root = &BinaryNode{value: value, left: nil, right: nil}
    } else {
        t.root.insert(value)
    }
    return t
}

func (n *BinaryNode) insert(value int) {
    if n == nil {
        return
    } else if value <= n.value {
        if n.left == nil {
            n.left = &BinaryNode{value: value, left: nil, right: nil}
        } else {
            n.left.insert(value)
        }
    } else {
        if n.right == nil {
            n.right = &BinaryNode{value: value, left: nil, right: nil}
        } else {
            n.right.insert(value)
        }
    }
}`