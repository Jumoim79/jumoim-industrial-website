export async function GET() {
  const updates = [
    {
      id: 1,
      title:
        "Conformal Cooling Optimization Breakthrough",

      category: "plastic-mold",

      country: "global",

      content:
        "Advanced conformal cooling channels improved cycle time by 22% in high-precision injection molds.",

      date: new Date().toISOString(),
    },

    {
      id: 2,
      title:
        "High-Precision CNC Tolerance Upgrade",

      category: "cnc",

      country: "global",

      content:
        "Achieved ±0.005mm machining tolerance for aerospace-grade components.",

      date: new Date().toISOString(),
    },

    {
      id: 3,
      title:
        "Metal Additive Cooling Innovation",

      category: "metal-3d",

      country: "global",

      content:
        "Advanced metal additive manufacturing improved cooling efficiency by 31%.",

      date: new Date().toISOString(),
    },

    {
      id: 4,
      title:
        "Global Injection Mold Production Expansion",

      category: "plastic-mold",

      country: "global",

      content:
        "Expanded precision mold production capacity for international manufacturing programs.",

      date: new Date().toISOString(),
    },
  ];

  return Response.json({
    success: true,
    data: updates,
  });
}